Add-Type -AssemblyName System.Drawing


# Define the directory containing the images
$imageDirectory = "D:\src\pack-248.github.io\src\images\gallery"
Write-Output $imageDirectory


# Get all image files in the directory
$imageFiles = Get-ChildItem -Path $imageDirectory  -File
Write-Output $imageFiles

foreach ($file in $imageFiles) {
    # Load the image
    $image = [System.Drawing.Image]::FromFile($file.FullName)

    # Get the dimensions
    $width = $image.Width
    $height = $image.Height
    $nameWithExtension = $file.Name
    $nameWithoutExtension = $file.BaseName

    # Output the file name and dimensions
    Write-Output "<a href='images/gallery/$nameWithExtension'>"
    Write-Output "    <img alt='$nameWithoutExtension thumbnail' src='images/gallery/thumb/th_$nameWithExtension' />"
    Write-Output "</a>"

    # Dispose of the image object to free up memory
    $image.Dispose()
}
