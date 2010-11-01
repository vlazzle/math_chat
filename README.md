This is a chat server largely based on ry/node_chat.

My changes so far:
* Middleware support, powered by senchalabs/connect
  * More streamlined static file serving
  * gzip compression
* Support for client-side parsing of Latex expressions, powered by [MathJax](http://www.mathjax.org/)
* Slightly improved connection error handling
