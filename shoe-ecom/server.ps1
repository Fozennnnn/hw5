# StrideForge Local Static Web Server (PowerShell .NET HttpListener)
$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$port/")
try {
    $listener.Start()
    Write-Host "StrideForge dev server active at http://127.0.0.1:$port/"
    $folder = "C:\Users\Fozen\.gemini\antigravity\scratch\shoe-ecom"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }
        
        # Clean path and prevent directory traversal
        $cleanPath = $urlPath.Replace("/", "\").TrimStart("\")
        $filePath = [System.IO.Path]::GetFullPath((Join-Path $folder $cleanPath))
        
        if (-not $filePath.StartsWith($folder)) {
            $response.StatusCode = 403
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            $response.Close()
            continue
        }
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $extension = [System.IO.Path]::GetExtension($filePath)
            
            $contentType = "text/plain"
            if ($extension -eq ".html") { $contentType = "text/html; charset=utf-8" }
            elseif ($extension -eq ".css") { $contentType = "text/css" }
            elseif ($extension -eq ".js") { $contentType = "application/javascript" }
            elseif ($extension -eq ".png") { $contentType = "image/png" }
            elseif ($extension -eq ".jpg" -or $extension -eq ".jpeg") { $contentType = "image/jpeg" }
            elseif ($extension -eq ".svg") { $contentType = "image/svg+xml" }
            elseif ($extension -eq ".ico") { $contentType = "image/x-icon" }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_
} finally {
    $listener.Stop()
}
