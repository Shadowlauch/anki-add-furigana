export const model = {
    "395660851": {
        "vers": [],
        "name": "Japanese <>",
        "tags": null,
        "did": 79125106543,
        "usn": -1,
        "req": [
            [
                0,
                "all",
                [
                    0
                ]
            ]
        ],
        "flds": [
            {
                "name": "English",
                "media": [],
                "sticky": false,
                "rtl": false,
                "ord": 0,
                "font": "arial, sans-serif",
                "size": 12
            },
            {
                "name": "Kana",
                "media": [],
                "sticky": false,
                "rtl": false,
                "ord": 1,
                "font": "arial, sans-serif",
                "size": 12
            },
            {
                "name": "Kanji",
                "media": [],
                "sticky": false,
                "rtl": false,
                "ord": 2,
                "font": "arial, sans-serif",
                "size": 12
            },
            {
                "name": "Remarks",
                "media": [],
                "sticky": false,
                "rtl": false,
                "ord": 3,
                "font": "arial, sans-serif",
                "size": 12
            }
        ],
        "sortf": 0,
        "tmpls": [
            {
                "name": "Recognition",
                "qfmt": "<div class=jpbig> {{furigana:Kanji}} </div>",
                "did": null,
                "bafmt": "",
                "afmt": "{{FrontSide}} \n <hr id=answer><div class=jp>{{English}}</div> \n <p><span class=jpmid>{{furigana:Remarks}}</span></p>",
                "ord": 0,
                "bqfmt": ""
            },
            {
                "name": "Recall",
                "qfmt": "<div class=jp> {{English}} </div>",
                "did": null,
                "bafmt": "",
                "afmt": "{{FrontSide}} \n <hr id=answer><div class=jpbig>{{furigana:Kanji}}</div> \n <p><span class=jpmid>{{furigana:Remarks}}</span></p>",
                "ord": 0,
                "bqfmt": ""
            }
        ],
        "mod": 1515252355,
        "latexPost": "\\end{document}",
        "type": 0,
        "id": 395660851,
        "css": ".card { \n font-family: arial; \n font-size: 20px; \n text-align: center; \n color: black; \n background-color: white; \n } \n .jp { font-size: 30px } \n .jpmid { font-size: 20px } \n .jpbig { font-size: 50px } \n .jptiny { font-size: 10px }",
        "latexPre": "\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n"
    }
};