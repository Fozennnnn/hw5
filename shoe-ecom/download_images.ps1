# Reset SecurityProtocol to support modern TLS
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# PowerShell download script for shoe-ecom images
$images = [ordered]@{
    "men_apex_runner.jpg" = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80"
    "men_heritage_brogue.jpg" = "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&auto=format&fit=crop&q=80"
    "men_urban_explorer.jpg" = "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=80"
    "women_stella_heel.jpg" = "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80"
    "women_velvet_sneaker.jpg" = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80"
    "women_breeze_flat.jpg" = "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&auto=format&fit=crop&q=80"
    "casual_nomad_loafer.jpg" = "https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?w=600&auto=format&fit=crop&q=80"
    "casual_canvas_low.jpg" = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=80"
    "casual_slipon_lite.jpg" = "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=80"
    "sports_velocity_court.jpg" = "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80"
    "sports_trail_gazer.jpg" = "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&auto=format&fit=crop&q=80"
    "sports_dunk_pro.jpg" = "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80"
    "socks_merino_wool.jpg" = "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80"
    "socks_compression.jpg" = "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&auto=format&fit=crop&q=80"
    "acc_carbon_insoles.jpg" = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=80"
    "acc_lock_laces.jpg" = "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&auto=format&fit=crop&q=80"
    "other_cleaner_kit.jpg" = "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&auto=format&fit=crop&q=80"
}

$destFolder = "C:\Users\Fozen\.gemini\antigravity\scratch\shoe-ecom\assets\images"
if (-not (Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder -Force
}

$webClient = New-Object System.Net.WebClient
foreach ($key in $images.Keys) {
    $filePath = Join-Path $destFolder $key
    $url = $images[$key]
    Write-Host "Downloading $key..."
    try {
        $webClient.DownloadFile($url, $filePath)
    } catch {
        Write-Error "Failed to download $key from $url : $_"
    }
}
Write-Host "All downloads complete!"
