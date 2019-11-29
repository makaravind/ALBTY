#33 - HTTP Headers
##from HTTP request

Accept-Language
Accept-Encoding
Cookie
Referer
  You may have noticed the word "referrer" is misspelled as "referer". Unfortunately it made into the official HTTP specifications like that and got stuck.
Authorization
## from HTTP response
Cache-Control
Content-Type
  Content-Type: text/html; charset=UTF-8
  what is / ? 
  http://www.webmaster-toolkit.com/mime-types.html
Content-Disposition
  Note that the appropriate Content-Type header should also be sent along with this:
  Content-Type: application/zip
  Content-Disposition: attachment; filename="download.zip"
Content-Length
Etag
  This is another header that is used for caching purposes. It looks like this:

  1
  Etag: "pub1259380237;gz"
  The web server may send this header with every document it serves. The value can be based on the last modify date, file size or even the checksum value of a file. The browser then saves this value as it caches the document. Next time the browser requests the same file, it sends this in the HTTP request:

  1
  If-None-Match: "pub1259380237;gz"
  If the Etag value of the document matches that, the server will send a 304 code instead of 200, and no content. The browser will load the contents from its cache.
Last-Modified
  send If-Modified-Since as request header if matches server sends 304
Location
  This header is used for redirections. If the response code is 301 or 302, the server must also send this header.
  302 by default
Set-Cookie
Content-Encoding



#31 -- no value
## Fun With HTTP Header ⚡️⚡️
1. HTTP headers allow the client and the server to pass additional information with the request or the response.
2. It's case-insensitive name
3. Headers can be grouped according to their contexts
  - *General header:* Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.
      - _example:_ Cache-Control
  - *Request header:* Headers containing more information about the resource to be fetched or about the client itself.
      - example: user-agent,Accept-Language,*Cookie*
  - *Response header:* Headers with additional information about the response, like its location or about the server itself (name and version etc.).
      - _example:_ *Set-Cookie*
  - *Entity header:* Headers containing more information about the body of the entity, like its content length or its MIME-type.
      - _example:_ Content-Length

  Practical use-cases and lots of treats for popular headers in coming posts. 
> #31