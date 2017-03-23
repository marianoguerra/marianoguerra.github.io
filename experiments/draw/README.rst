::

    import json
    result = {}
    data = json.load(open("../emoji.json"))

    PREFIX = '''<!doctype html>
    <html>
     <head>
      <meta charset=utf-8>
      <title>Emojis!</title>
     </head>
     <style>body{padding: 2em;} table{margin: auto;}</style>
     <body>
      <table>
      <thead><th>Name</th><th>Path</th><th>Image</th></thead>
      <tbody>
    '''

    SUFFIX = '''

      </tbody>
      </table>
     </body>
    </html>
    '''


    handles = {}
    for name, v in data.iteritems():
        code = v['unicode']
        category = v['category']
        wh = handles.get(category)
        if not wh:
            wh = open(category + ".html", "w")
            wh.write(PREFIX)
            handles[category] = wh
        row = '<tr><td>%s</td><td>imgs/emojis/%s.svg</td><td><img src="../imgs/emojis/%s.svg" alt="%s"></td></tr>\n' % (name, code, code, name)
        wh.write(row)

    for _, wh in handles.iteritems():
        wh.write(SUFFIX)
        wh.close()

