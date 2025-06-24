{\rtf1\ansi\ansicpg1251\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red49\green49\blue49;\red231\green231\blue231;}
{\*\expandedcolortbl;;\cssrgb\c25098\c25098\c25098;\cssrgb\c92549\c92549\c92549;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 /* \uc0\u1041 \u1072 \u1079 \u1086 \u1074 \u1099 \u1077  \u1089 \u1090 \u1080 \u1083 \u1080  */\
body \{\
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\
    line-height: 1.6;\
    margin: 0;\
    padding: 0;\
    color: #333;\
    background-color: #f9f9f9;\
\}\
\
header \{\
    background: linear-gradient(135deg, #6e8efb, #a777e3);\
    color: white;\
    padding: 2rem 0;\
    text-align: center;\
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\
\}\
\
main \{\
    padding: 2rem;\
    max-width: 800px;\
    margin: 0 auto;\
\}\
\
.content \{\
    background: white;\
    padding: 2rem;\
    border-radius: 8px;\
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);\
\}\
\
footer \{\
    text-align: center;\
    padding: 1rem;\
    margin-top: 2rem;\
    background: #333;\
    color: white;\
\}\
\
/* \uc0\u1050 \u1085 \u1086 \u1087 \u1082 \u1080  */\
.btn \{\
    display: inline-block;\
    padding: 0.8rem 1.5rem;\
    border: none;\
    border-radius: 4px;\
    cursor: pointer;\
    font-size: 1rem;\
    transition: all 0.3s ease;\
    text-decoration: none;\
\}\
\
.btn i \{\
    margin-right: 8px;\
\}\
\
.btn-primary \{\
    background-color: #6e8efb;\
    color: white;\
\}\
\
.btn-primary:hover \{\
    background-color: #5a7df4;\
    transform: translateY(-2px);\
\}\
\
.btn-secondary \{\
    background-color: #f1f1f1;\
    color: #333;\
\}\
\
.btn-secondary:hover \{\
    background-color: #e1e1e1;\
\}\
\
#feedbackBtn \{\
    margin-top: 1rem;\
    font-size: 1.1rem;\
\}\
\
/* \uc0\u1052 \u1086 \u1076 \u1072 \u1083 \u1100 \u1085 \u1086 \u1077  \u1086 \u1082 \u1085 \u1086  */\
.modal \{\
    display: none;\
    position: fixed;\
    z-index: 1000;\
    left: 0;\
    top: 0;\
    width: 100%;\
    height: 100%;\
    background-color: rgba(0, 0, 0, 0.5);\
    animation: fadeIn 0.3s;\
\}\
\
.modal-content \{\
    background-color: #fefefe;\
    margin: 10% auto;\
    padding: 2rem;\
    border-radius: 8px;\
    width: 90%;\
    max-width: 500px;\
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);\
    position: relative;\
    animation: slideDown 0.3s;\
\}\
\
.close \{\
    position: absolute;\
    right: 1.5rem;\
    top: 1rem;\
    font-size: 1.5rem;\
    font-weight: bold;\
    color: #aaa;\
    cursor: pointer;\
    transition: color 0.3s;\
\}\
\
.close:hover \{\
    color: #333;\
\}\
\
/* \uc0\u1060 \u1086 \u1088 \u1084 \u1072  */\
.form-group \{\
    margin-bottom: 1.5rem;\
\}\
\
.form-group label \{\
    display: block;\
    margin-bottom: 0.5rem;\
    font-weight: 600;\
\}\
\
.form-group input,\
.form-group textarea \{\
    width: 100%;\
    padding: 0.8rem;\
    border: 1px solid #ddd;\
    border-radius: 4px;\
    font-family: inherit;\
    font-size: 1rem;\
    transition: border 0.3s;\
\}\
\
.form-group input:focus,\
.form-group textarea:focus \{\
    border-color: #6e8efb;\
    outline: none;\
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);\
\}\
\
.form-actions \{\
    display: flex;\
    justify-content: flex-end;\
    gap: 1rem;\
\}\
\
/* \uc0\u1040 \u1085 \u1080 \u1084 \u1072 \u1094 \u1080 \u1080  */\
@keyframes fadeIn \{\
    from \{ opacity: 0; \}\
    to \{ opacity: 1; \}\
\}\
\
@keyframes slideDown \{\
    from \{ \
        transform: translateY(-50px);\
        opacity: 0;\
    \}\
    to \{ \
        transform: translateY(0);\
        opacity: 1;\
    \}\
\}\
\
/* \uc0\u1040 \u1076 \u1072 \u1087 \u1090 \u1080 \u1074 \u1085 \u1086 \u1089 \u1090 \u1100  */\
@media (max-width: 600px) \{\
    .modal-content \{\
        margin: 20% auto;\
        width: 95%;\
    \}\
    \
    .form-actions \{\
        flex-direction: column;\
    \}\
    \
    .form-actions button \{\
        width: 100%;\
    \}\
\}}