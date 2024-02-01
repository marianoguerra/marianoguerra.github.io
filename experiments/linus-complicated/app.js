function svgToPng(svgElement, width, height, callback) {
  var serializer = new XMLSerializer();
  var svgString = serializer.serializeToString(svgElement);

  var img = new Image();
  img.width = width;
  img.height = height;
  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    var dataURL = canvas.toDataURL("image/png");
    callback(dataURL);
  };

  img.src = "data:image/svg+xml;base64," + btoa(svgString);
}

function downloadImageAsPng(imgElement, fileName) {
  var canvas = document.createElement("canvas");
  canvas.width = imgElement.naturalWidth;
  canvas.height = imgElement.naturalHeight;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(imgElement, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  var downloadLink = document.createElement("a");
  downloadLink.href = dataURL;

  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function main() {
  const svgElement = document.getElementById("svg"),
    search = new URLSearchParams(location.search),
    width = svgElement.clientWidth,
    height = svgElement.clientHeight;

  document.getElementById("name").textContent =
    (search.get("name") ?? "Steven") + ",";

  document.getElementById("download-btn").addEventListener("click", () => {
    svgToPng(svgElement, width, height, function (pngDataUrl) {
      var imgElement = document.createElement("img");
      imgElement.src = pngDataUrl;
      document.body.appendChild(imgElement);
      setTimeout(
        () => downloadImageAsPng(imgElement, "linux-complicated.png"),
        100,
      );
      document.body.removeChild(imgElement);
    });
  });
}

main();
