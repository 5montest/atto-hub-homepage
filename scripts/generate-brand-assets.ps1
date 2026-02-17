Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'
$publicDir = 'C:\atto-hub.com\homepage\public'

function New-RoundedPath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $diameter = $Radius * 2
  $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-AttoHubIcon {
  param(
    [string]$Path,
    [int]$Size
  )

  $bitmap = [System.Drawing.Bitmap]::new($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $graphics.Clear([System.Drawing.Color]::Transparent)

  $margin = [Math]::Round($Size * 0.04)
  $side = $Size - ($margin * 2)
  $rect = New-Object System.Drawing.RectangleF $margin, $margin, $side, $side
  $radius = [Math]::Round($Size * 0.2)
  $shape = New-RoundedPath -X $rect.X -Y $rect.Y -Width $rect.Width -Height $rect.Height -Radius $radius

  $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush `
    $rect,
    ([System.Drawing.Color]::FromArgb(74, 92, 122)),
    ([System.Drawing.Color]::FromArgb(107, 158, 137)),
    50
  $graphics.FillPath($bgBrush, $shape)

  $glossBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(30, 255, 255, 255))
  $graphics.FillEllipse($glossBrush, $Size * 0.12, $Size * 0.06, $Size * 0.72, $Size * 0.48)

  $fontSize = [Math]::Round($Size * 0.38)
  $font = New-Object System.Drawing.Font('Segoe UI Semibold', $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $stringFormat = New-Object System.Drawing.StringFormat
  $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
  $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Center

  $textRect = New-Object System.Drawing.RectangleF ($Size * 0.0), ($Size * 0.08), ($Size * 0.86), ($Size * 0.84)
  $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
  $graphics.DrawString('a', $font, $textBrush, $textRect, $stringFormat)

  $dotBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(229, 176, 92))
  $dotSize = $Size * 0.11
  $graphics.FillEllipse($dotBrush, $Size * 0.66, $Size * 0.23, $dotSize, $dotSize)

  $stroke = [System.Drawing.Pen]::new(
    [System.Drawing.Color]::FromArgb(56, 255, 255, 255),
    [single]([Math]::Max(1, [Math]::Round($Size * 0.01)))
  )
  $graphics.DrawPath($stroke, $shape)

  $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)

  $stroke.Dispose()
  $dotBrush.Dispose()
  $textBrush.Dispose()
  $stringFormat.Dispose()
  $font.Dispose()
  $glossBrush.Dispose()
  $bgBrush.Dispose()
  $shape.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

function New-AttoHubOgp {
  param([string]$Path)

  $width = 1200
  $height = 630
  $bitmap = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $baseRect = New-Object System.Drawing.Rectangle 0, 0, $width, $height
  $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush `
    $baseRect,
    ([System.Drawing.Color]::FromArgb(237, 243, 255)),
    ([System.Drawing.Color]::FromArgb(228, 242, 237)),
    30
  $graphics.FillRectangle($bgBrush, $baseRect)

  $shapeBrush1 = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(80, 74, 92, 122))
  $shapeBrush2 = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(70, 107, 158, 137))
  $graphics.FillEllipse($shapeBrush1, -120, -180, 620, 620)
  $graphics.FillEllipse($shapeBrush2, 900, -120, 520, 520)

  $panelPath = New-RoundedPath -X 70 -Y 70 -Width 1060 -Height 490 -Radius 36
  $panelBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(226, 255, 255, 255))
  $panelStroke = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(52, 74, 92, 122), [single]2)
  $graphics.FillPath($panelBrush, $panelPath)
  $graphics.DrawPath($panelStroke, $panelPath)

  $iconPath = Join-Path $publicDir 'icon-512.png'
  $icon = [System.Drawing.Image]::FromFile($iconPath)
  $graphics.DrawImage($icon, 120, 138, 120, 120)

  $labelFont = New-Object System.Drawing.Font('Segoe UI', 30, [System.Drawing.FontStyle]::Bold)
  $titleFont = New-Object System.Drawing.Font('Yu Gothic UI', 50, [System.Drawing.FontStyle]::Bold)
  $subtitleFont = New-Object System.Drawing.Font('Segoe UI', 28, [System.Drawing.FontStyle]::Regular)

  $inkBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(44, 54, 63))
  $subBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(74, 92, 122))

  $graphics.DrawString('Atto Hub', $labelFont, $subBrush, 270, 160)
  $graphics.DrawString('現場の不便を、やわらかくほどく。', $titleFont, $inkBrush, 126, 292)
  $graphics.DrawString('Real-World Product Studio', $subtitleFont, $subBrush, 122, 398)

  $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)

  $subBrush.Dispose()
  $inkBrush.Dispose()
  $subtitleFont.Dispose()
  $titleFont.Dispose()
  $labelFont.Dispose()
  $icon.Dispose()
  $panelStroke.Dispose()
  $panelBrush.Dispose()
  $panelPath.Dispose()
  $shapeBrush2.Dispose()
  $shapeBrush1.Dispose()
  $bgBrush.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

New-AttoHubIcon -Path (Join-Path $publicDir 'icon-192.png') -Size 192
New-AttoHubIcon -Path (Join-Path $publicDir 'icon-512.png') -Size 512
New-AttoHubIcon -Path (Join-Path $publicDir 'apple-touch-icon.png') -Size 180
New-AttoHubOgp -Path (Join-Path $publicDir 'ogp.png')

'assets-generated'
