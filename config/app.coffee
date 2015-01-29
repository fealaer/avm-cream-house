# Read more about app configs at http://docs.appgyver.com

module.exports =
  app:
    name: "avm-cream-house"

  # steroidsAppId and steroidsApiKey headers are required by Supersonic Data
#  network:
#     extraResponseHeaders:
#       "Access-Control-Allow-Origin": "http://192.168.1.4"
#       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-TOKEN, x-csrf-token, steroidsAppId, steroidsApiKey"

  webView:
    viewsIgnoreStatusBar: false
    enableDoubleTapToFocus: false
    disableOverscroll: false
    enableViewportScale: false
    enablePopGestureRecognition: true
    allowInlineMediaPlayback: true

  # Applies on iOS only
#  statusBar:
#    enabled: true
#    style: "default"
