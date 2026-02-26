import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://tasteoftexas.com/",
    "https://www.theanniehouston.com/",
    "https://resiliencevietkitchen.com/"
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, context=ctx, timeout=10).read().decode('utf-8')
        match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        if match:
            print(f"{url} -> {match.group(1)}")
        else:
            print(f"{url} -> No og:image found")
    except Exception as e:
        print(f"Error for {url}: {e}")
