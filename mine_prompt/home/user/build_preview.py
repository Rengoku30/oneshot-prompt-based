#!/usr/bin/env python3
"""Assemble a self-contained preview.html by inlining image data URIs."""
import pathlib

PRE = pathlib.Path("/tmp/pre")
OUT = pathlib.Path("/home/user/preview.html")

uris = {name: (PRE / f"{name}.uri").read_text() for name in
        ["hero", "work-cliff", "work-pavilion", "work-reading"]}

template = pathlib.Path("/home/user/preview.template.html").read_text()
html = template
for name, uri in uris.items():
    html = html.replace(f"__URI_{name.upper().replace('-', '_')}__", uri)

OUT.write_text(html)
print(f"wrote {OUT} ({len(html):,} bytes)")
