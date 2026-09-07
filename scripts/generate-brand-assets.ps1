# Regenerate ATENELA's typographic brand assets on Windows.
Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$publicDir = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../public'))
function New-BrandImage([string]$Path, [int]$Width, [int]$Height, [bool]$IsOgp) {
  $bitmap = [Drawing.Bitmap]::new($Width, $Height)
  $g = [Drawing.Graphics]::FromImage($bitmap)
  $g.TextRenderingHint = [Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $g.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $ink = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#20344b'))
  $blue = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#244dcc'))
  $white = [Drawing.SolidBrush]::new([Drawing.Color]::White)
  if ($IsOgp) {
    $g.Clear([Drawing.Color]::White)
    $logo = [Drawing.Font]::new('Segoe UI', 34, [Drawing.FontStyle]::Bold, [Drawing.GraphicsUnit]::Pixel)
    $headline = [Drawing.Font]::new('Yu Gothic', 60, [Drawing.FontStyle]::Bold, [Drawing.GraphicsUnit]::Pixel)
    $small = [Drawing.Font]::new('Yu Gothic', 23, [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
    $g.DrawString('ATENELA', $logo, $ink, 80, 65)
    $g.FillEllipse($blue, 250, 94, 8, 8)
    $g.DrawString("順番待ちツール Ato`n個人で開発しています。", $headline, $ink, 76, 195)
    $g.DrawString('ATENELA（アテネラ）', $small, $ink, 80, 500)
    $logo.Dispose(); $headline.Dispose(); $small.Dispose()
  } else {
    $g.Clear([Drawing.ColorTranslator]::FromHtml('#244dcc'))
    $font = [Drawing.Font]::new('Segoe UI', [single]($Width * .70), [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
    $format = [Drawing.StringFormat]::new()
    $format.Alignment = [Drawing.StringAlignment]::Center
    $format.LineAlignment = [Drawing.StringAlignment]::Center
    $g.DrawString('a', $font, $white, [Drawing.RectangleF]::new(0, -$Height*.05, $Width, $Height), $format)
    $format.Dispose(); $font.Dispose()
  }
  $bitmap.Save($Path, [Drawing.Imaging.ImageFormat]::Png)
  $white.Dispose(); $blue.Dispose(); $ink.Dispose(); $g.Dispose(); $bitmap.Dispose()
}
New-BrandImage (Join-Path $publicDir 'icon-192.png') 192 192 $false
New-BrandImage (Join-Path $publicDir 'icon-512.png') 512 512 $false
New-BrandImage (Join-Path $publicDir 'apple-touch-icon.png') 180 180 $false
New-BrandImage (Join-Path $publicDir 'ogp.png') 1200 630 $true
# ICO container with a PNG image, supported by modern browsers.
$png = [IO.File]::ReadAllBytes((Join-Path $publicDir 'icon-192.png'))
$stream = [IO.File]::Create((Join-Path $publicDir 'favicon.ico'))
$writer = [IO.BinaryWriter]::new($stream)
$writer.Write([uint16]0); $writer.Write([uint16]1); $writer.Write([uint16]1)
$writer.Write([byte]192); $writer.Write([byte]192); $writer.Write([byte]0); $writer.Write([byte]0)
$writer.Write([uint16]1); $writer.Write([uint16]32); $writer.Write([uint32]$png.Length); $writer.Write([uint32]22)
$writer.Write($png); $writer.Dispose()

