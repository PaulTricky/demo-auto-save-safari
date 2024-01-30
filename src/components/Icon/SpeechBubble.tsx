import React from 'react';

function SpeechBubbleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={51}
      height={67}
      viewBox="0 0 51 67"
      fill="none"
    >
      <rect x="0.623047" y="0.820068" width="49.7538" height={66} fill="url(#pattern01)" />
      <defs>
        <pattern id="pattern01" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <use xlinkHref="#image0_7659_8623" transform="matrix(0.00289855 0 0 0.00218506 0 0.00289856)" />
        </pattern>
        <image
          id="image0_7659_8623"
          width={345}
          height={455}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAHHCAYAAAAVnivoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dB5hU1d3G6UVAaSqKvUs09oYYNWpsCfYutqBiYi/YRWIJxhrsDTWW6FpA2D1nFtBVYefc2awfxs8W9Us0dpPYKHPvGD3f+Q+CCuzuzO7MvPfceX/P83t4NHnknP+9950zd07p1IkQQggh1YcN1PLZ2WrdXFC/VTatdw8zqV9GGX1ILlAnhUafERp1/lIG+jz538XIqMPl/58N1C9ymbqt5b9l06mB6H4RQkhZsdZ2XtBYu2bW6F2ioO4YF5iXuHC8Mwq0cn++HAXqA/fvIvfPtnyqj10ov+SCuFb+7jBQ4yKTOj4X6J3mmpkro2tECCFtYmtquoamduP8iDLQV0ZG10iwuVBbUN4A7bgu5L90wdvs2vuIjJCz6dRe85r1KuiaEkKqFAnUKEhtlsvoMS5E73Ih1eRDmLZjBPyJ+7Cod3/+LjR1e9s5k/uja08ISSDyvjT/jjTQv3eB0+BGfXPxAQgZ8X7jRrqvuP7f7UbsR3O0SwhpF7Z56nLZjN7TBcsEN0INXKh8jQ642Gr0q+7PiS6AR9rZU/qhrx0hJKZkm2rXWfgrva6p1pFqR5UPI/ehNDs/86FJb4i+poQQINaO65JrTA13X/+vd76FDqgk6sL2f92H1vioqX4T9PUmhFQA+cEqG9T93I22bpWpU+gQqirltYLRl7vR7jD0fUAIKTFRRv/EPegTIqM+hIcNzQeuvFLgHF1CPCYb1K8tIyc3Yn0THip0mbqgzbnr83SYUQfY5ubu6HuGENIGVqmesrTUjVinhYH+LzpEaBEa/ZH7c0LW6LXQ9xEhZAmy6dR67iG9MQzUf+BhQTvkdx+OU2XVmSxJRt9bhFQ1OaNGLJxyxVFrMlVvyeY4Mm8Zfa8RUjUsfCWgjnUP3xx8CNBK6K71v9yfV87L1A5B33+EJJa5jfUrhYG67Lt3d/AHnwLCNlDZyKhbZFcz9P1ISGIIG1MbuZHMPfkHLAYPOsUrsxLc/XAfV5UR0gHCTN0GYaAf5PtW2pLfbVjzJ9mgHH2/EuIN8sC4h+d+bspCC3XhyFbfuaAptTr6/iUktsj8yPxrgfwEdfyDS/1z4TtbfYPNzBiEvp8JiQ0LmmeskT8SheFKS6S7nz4LTeocmYmCvr8JgSGjjWjhPqRlPt+KVq1G/T0ydYdxUQOpKmxDQ7dsWp3G1Vm0UrpvSS/IcUHoe5+QspPNqN0WntCKf/BodbloJoJtnjoY/RwQUnJCM319d6NPRT9olOYPh8yoY9HPBCElwb5U32fhRs06xD9clP5Ao1JcOUa8RX5oiEzqeDdq+Bj+MFHagu7D/6ucUafwhzHiFfnNsgM1A/0AUVqo+cMfuUSXxB05P0vmJoZGz0c/NJQWq9y3YaDOkvsY/SwRshRRum5Td4Nm0A8KpR3Vha3hYY8kNuT3dg3UFVytRZOk/FDrwvZsvqslUHLpuh3dDfka+oGgtGwaVct5taTi5EevRt8gk7vhDwGl5dbo93KZ2p+hnztSJYSmdmMe+0KrTdl20933l1g7rgv6GSQJJgrqjgmNmoe+4SmFadSz82dPXxX9LJKEYedM7h8G+lH4DU5pDHTPwqehqdsb/VyShJAN6n7ubqz30Tc2pXFy4e8R6gq+PiDtRrYj/G7PAZ6vRWnL1tlALY9+XolnLDypgAsLKC3E0KiXuNEMKRh5PSDvnNA3LqV+qT7ONaaGo59fEnNygTqJK7cobZ/57TyNPg79HJMYInu+uhvkz+iblNKEOIE/iJHFZGerdV3A/jUGNyalCVI9bWdP6Yd+vgkYmesnRyfjb0hKk6f8IDbXzFwZ/ZwTALKzkLsBLubeA5SWW/Vm1ui10M88qSD2lZoebvT6IP7mo7RqfJ/701YJsjzWfbI2xOCmo7SqlNdyuUBtj84AUkbmp6cNlXdE6JuN0mpVNlfKmtQe6CwgZSAy6qeyJyb6JqO02l144kLqIHQmkBLiPj33CQM1F31zUUoXKnvTuj9HobOBlIBcoE/+7oLCbyxK6fe6wc+38nyiM4K0E5mi5S7k79E3EqW0ZRdOoaw7Bp0XpEhkOZ/7lLwDfQNRSts2v5VoWh+Kzg1SILampmsYqEnoG4dSWriyKZMb1Y5E5wdpA9lkm4sMKPVTF7KR/EiNzhHSArKKKzL6KfSNQiltv26QtCBr9C7oPCFLYJunLucCth59g1BKO64L2q9ypnY7dK6Q75Ct1NxFeQ59Y1BKS2d+Z7xM7ebofKl65PC20GiDviEopWXQqA/lrD10zlQtNl3TmyNYShOu0a/Kpk7ovKk6bHNzd/cpVwu/ASil5deolMwcQudO1ZBfaMCzuCitKkOjbkdnT1Xw3WkGXMlFaRUamtQ56AxKPO5rwzXoC00pxSj7HDgPROdQYgkDfRH6IlNKsbqQnZ9rUtug8yhx5Iw6BX1xKaUx0eiPOLWrhGTTqb3yu/SgLyylNDa6EW2TVaonOp+8R063DI36An1BKaUx1Khb0BnlNXPNzJVdId+BX0hKaZw9Ap1VXpJfzcXlspTSNpSz+0JTuzE6s7wiPxc20A+hLx6l1BONekM2ikJnlzdERo+HXzRKqVfKKlB0dnlBlEkdKSdYoi8YpdQ/cxk9Bp1hsSYX1G8VBiqLvlCUUj91o9kwl6nbGp1lsUS2MouM/j/0RaKUeq7LEdvQ0BedabFCfuiKAvUk/OJQSpPiRHSuxYowUGfG4KJQShOi/K6TDep+js62WJAL1PZy3jr6olBKE+c7cjwVOuOg2Fm1A6JA/SMGF4NSmkDdt+S70TkHI/8e1qgp6ItAKU227pvyPui8g+A6fgG6+JTSKtCoD206NRCdeRVFNtx1w/iv4cWnlFaFskwfnXsVwzY09JIjftFFp5RWl2FQtz86/ypCFKjr0MWmlFah8tqgecYK6AwsK7nG1HCecEAphWn0DegcLBv2pfo+bhT7FrzIlNKqNf9bUKPaAp2HZcGNYG9FF5hSSvNng9XUdEVnYkmR5W3cvpBSGhtN3YnoXCwZsqwtMupdeFEppXSx6hPZ+Q+djyUhDPRt+IJSSumSquvQ+dhhFm7CzdkElNL4GRodhU16Q3ROthtrx3XhabOU0lhr1DR0VrabKK1HwwtIKaVt6OW+s7KFYRjoT9HFo5TStgwDlZFdAdG5WRShUbejC0cppYUaGn0gOjcLRk6KdA3+Bl00SiktXPW6bWjohs7PNuGPXZRSbzX6OHSGton7NDgBXihKKW2fb8d6NGvTNb3dJ8F7MSgUpYnytSfutWriVfbuS8/O++erL7aNk/5o//3sU/C2JU6TOh6dpS0SBvo8eIEoTYgzbrvGHrHnrnblQQOse7xadODy/exP11/HHj9yT3v/+LEM3o4bz9GsbIQbGvXvGBSIUm/9rGGyveX80+xP1l2r1WBtzb69e9sTD9jH/n3qg/D+eGsc3826hl0JLwylnvr5c1PsuaMOsSv07dPucF3S3j172ItOONJ+8fzT8P55p1FvyI/4lc7RFrEvqBXDQH8FLwylHtpw1/V2vdWHlixcl3TtoUPsM3dcC++nb7pM26+SOdoqrkET0QWh1Edvu/AM261r17IF7CK7d+tmbx57Kry/PhkGqrFyKdoKWaPXcokfogtCqW9e/Osjyx6uS3rjOafA++2TOaNGVCZJWyE0+gF0ISj1zT+ccWLFA1bs3LmzrZlwKbz/3mjUlIoEaUuEZvr63CuW0uJ8bMIltkuXzpCQFQf062vfnHw/vA4+KPmWDerXrkSeLpPQqDvQRaDUJ9+pfSg/r7WQMCynMq9WZjSg6+GFRl9b/jRdBnMb61dyKb8AXgBKPXLvHbeFB+wiZfECuh4+6HLuM9s8dblyZ+pSRIG6At15Sn3y2TuvgwfrD5X3s7KqDF0XH8wF6qQyR+qPsS/V9+HqLkqL89A9doYH65LusOkweF18MAzUi+VN1SUIjT4d3WlKffLd2odtj+7d4KG6LGfdexO8Pl5o1E/LGqyLkI0T3F/2d3iHKfXIS0YfBQ/TljzlkJHw+nih0TeUM1sX4/6yI+CdpdQj582eZocMHggP05ZcY8hKNjQKXqf4qz6xzc3dy5mveeTdBL6zlPqj7PuKDtK2fP7uG+B18sGy72eQa0wNR3eSUt+cOPZUeIi25ckH7guvkxcaPbl8CdspP4qdBO8kpZ4pe7uiQ7QtZYHEV7OmwmsVd0OjcrLrYFkC1gZqefcXzEN3klLf/OVO28NDtBC5p0FhhkafUZaQzWX0GHTnKPXREZtvAg/QQtxvl+HwWvlgGOiXyxKyYaCa0Z2j1Ee32nh9eIAWoszj/bD+MXi9fDA0tRuXNGCjTO3m6E5R6qu7bL0ZPEALdSI39i5IN5q9qKQh6/6Dt6I7RamvHrDrCHh4Fur2m24Mr5cPhkb/pWQBK7vPuP/g5+hOUeqrpx2+Pzw8i/HVx++B1yzuhkZ9u6AptXpJQjbKqGPRHaLUZ++7/Dx4cBajHIuDrpkPZtPqtNKEbKCmoztDqc/+9dG74MFZjGutOoTLbAvRqGc7HLA2nRook2/hnaHUc9dfo3xHfpdD2fsWXbO4Gwbqa5uZMahDIetGsSegO0JpEozzLlzLcvT+e8Nr5oVGH9exkDWqFt4JShOgHFwoJxGgw7NQV+jbx37x/NPwusVf9XS7A9Y2z1ghDHSI7wSlyXD4T4fBw7MYH7nqInjN4m5o9HyrVM92hawbxR6N7gClSfKW80+DB2cx7jtiO3jNfDBr9C7tDFk9Gd14SpPkxzMetz27d4eHZ6F269rVvqcegdct9ho9vuiAtQ0NfXncN6Wl16fVX+KN55wCr1ncdVk5u+iQjdL6UHTDKU2iT/zhMnhwFuPWwzaA1yzu5veYdQPTokLWJfND6IZTmkTlvK/B/ZeHh2cxznnkDnjd4q4L2n0KDlhrbefIqA/RjaY0qY45+Ffw4CzG8487HF6z2Gv0tQWHbJTRP4E3mNIEO3vSTfDgLMYN11wdXrO4KwfMFhyyodGnoxtMadKV4EKHZ6HKIopPZz4Br1mcdbn5TcFLbCOjpqAbTGnSvfzkY+DhWYwzbrsGXrO4G2bUAW0GrK2p6cq9YynKbFrZFx++3T557Th76wWn573z4rPs9Fsn2HdqH4K3r5S+NeUB26WLP8ts77joTHjNYq9RV7cZsjlTux28obSqlPXxD15xQf4Qv/79+rT6oMtE/rWHDrGH7P4ze/PYU+0HKb/Po/rZFpvCw7NQJ5w2Gl6v+Kumtxmycm4NvqG0Gvxn3SP2vGMOtQP69W33gy+he9gvdrGv1Pi5k7+MDtHhWaicYdC2Lj8/k9lZrYZsZPQz6IbSZPtZw2R70QlH2j69e5UsALp362Z/e+h+3v04869nnrS9e/aAB2ghjjtpFLxePpidrdZtMWBlJ5kwUFl0I2lynXn7tXadoauULQiGDB5op954BbyfxSivPtABWog3cXltYZq6w1oM2VyT2gbeQJpY5Z1e1y5dyh4G8mPSlb85Ht7fQp1y/Xh4gBaivDdH18oLjfpDyyGb0WPgDaSJU86KOunAfSseCr58vZ3fWGtXHjQAHqJt+dKf74TXygtbO/crDPRd8AbSxIlcQnrvZefC+1+Ipx4W7yPDl+vV0y5I18Hr5IMuR7+ydlyXZYes0X9BN5AmS5lmhQwH+XFNTopF16Et477M9hfbbw2vkU+GTXrDpQLWvlLTg0fN0FIq4dajezd4QMjyVfkVH12P1pRXKqsMHgSvVUvK4hB0jXzSDVgPXCpko7TeEt0wmix32XozeDgsUn7BR9ejLX9zyEh4nZblGkNW4quCInUfmhcsK2RHoxtGk+Ozd14HD4cllV/x0XVpzb89dV9FZl8U69W/PQFeG990I9l7lwrZMNC3oRtGk+Ohe+wMD4cl3WTdtfJfy9G1ac3jfvULeJ1+aK8ePbxfuozQ5emsZYSsyqAbRpOhLJeNw7vYZVl/ywR4fVpTAm3QCvE5NeH0Iw6A18RP1Sc/ClhZaytnh+MbRpPgJaOPgodDSx4/ck94fdpS33x1/pRYdK02WHO1/OY96Hr4qp1VO2BxyC5oSq2ObhBNhjKxPs6/kq80cIAXP+LIijVkneQ1gUwrQ9fBZ2VHw8Uhm03r3dENoskw86db4EHalpOvuxxep7aUd8f7jtgOUh85BeH+8WPhNUiAo74P2UD/NgYNognwtgvPgIdoW/oysf6TGU/YzTdYt+IBeyM3gimR6neLQ9b9wx/xDaJJ0IdTWGUDmdeeuBdeq0J8P/Wo3WbYhhWpi+zN+9CVF8L7nBTdt5GHvw9Zo6ahG0ST4QG7joCHaCGeeeRB8FoV6pcvPG1PGLlXfpRZrnqst/pQ+8I9N8L7mixVw+KQDQP9V3yDaBLcdZvN4QFaiHLMzefPTYHXqxjlnLON1irtCbcyepXNzn2rhR+q178PWR6cSEvkDpsOgwdoocoBjeh6FavM3pBNd1ZbecUO9X3oSoPt+DHH2vf1n+F9SqqhUV/kA9bOntIP3RiaHPfcYWt4eBaq/KiErld7lWloskxYVojJV/1C+itzb2U/iUd/f3E+rNF9qAZt89TlOkVN9ZugG0KT4+F77goPz2KcdW8y5oLKe1s5TLL2pivtdWeebM8ddUh+tdbZRx+cny2gJl5l/9PwFLyd1Wa2qXYdzpGlJVVOn0UHZzEetfdu8JrR5JpL1+0oMwuORjeEJsc/X30xPDiLUX744XtJWi7DQB0sG8OciW4ITY5vTr4fHpzFehW38qNlMptWp8lI9mp0Q2iy3HrYBvDgLMbVuSk1LZdGXSXTt+6BN4QmynsuPQcenMX6lAf7GVAPNeoWWVL7BLwhNFF+NWuqXbH/CvDgLEZf9jOgfhkG6j4J2enohtDkKVOH0MFZjLJkVaZAoetGE6bRNfK6wMAbQhPnW1MeiOV5Va15xhEHwutGE2ddJ5e0r8agITSB7r3jtvDgLEYf9zOg8TYM9HMyu+BddENoMn36ht/Bg7NYfdzPgMbX0Oi/yDvZj9ENoclUdvcvdF19XNxsg3XgdaOJ8jXuwEXL6oTTRsODs1i5ryotmUa924mn1NJy+vGMx+1yvXrCg7MYuZ8BLZXu29y/XciqHLohNNkes+8e8OAsRu5nQEuly9d5ndCNoMnXhxNsl1SO5EbXjfpvGOiv5HXBN+iG0IU/EslX6/fUI4kcRVXqMMBS+ZN114LXjPpv/nSEMFBfoxtSbcpJqTJVSM5W2m+X4XaLDddb6r1lrx498g/6mIN+md/J/l/PPAlvd0f0bT8DOdGWm1zTjupGsp/JIYohuiHVoOxcL2czyZEn7Xnoe3TvZvcdsZ1N3fx7eF/aY34/gwH94eFZjA13XQ+vG/Xb73744uyCcvvwVRfaNYasVLKHf6ctNrFzHrkD3q9iPWfUIfDgLMZJ486F14z6rRvEfiqzC75ANySpyuj1hJF7lSUAunfrZie6kTG6j8Xo234G1591Mrxm1HfVx7Ks9kN8Q5Ln3566L/+utdxBIKeV+rTe3qf9DC4dfTS8XtRzXb7KFK634Q1JmJOvu9wO6Ne3YmEwbJ017RtP3gfvdyFOvfEKeHgWKo+loR3W6PfkdcFL8IYkyJoJl+Z/ma50IKy64iD78mN3wfvflj7tZ3DrBafD60U916h/Ssim4Q1JiLMn3QRdQio/rr2fehReh7b0ZT+DxyZcAq8V9VyjX5X9ZOvhDUmAH02vsUMGD4QHw27bbpkfLaLr0Zq+7Gfw+pOT4LWifiuHIshI9hF0Q5Lg4XvuCg+FRd57WfynHh37y1/A69SasoF33D+sqA8qLT98TcQ3xG9lgQA6FH6ojKhl8j+6Lq0pE/3RdWrNX/1sB3iNqP/KIFaW1Y5DN8R3R2y+CTwUlvTuS8+G16U1s2llVxo4AF6nlqz741XwGlH/DQN9W6dsoH+LbojPTr91AjwQluWm660Nr01byr4M6Doty/XXGMpXBbQ0GnV1pyijD4E3xGOP3mc3eCi0pL75anh9WvPVx++BTHdryxvOHgOvDU2G7sP6gk65xtRwdEN8VZbNrtC3DzwUWnKv4dvAa9SWo/bdHV6nH9q3d2/76cwn4HWhyTCX0WM6LWiesQa6Ib468/Zr4aHQmp07d479AgXZO3fg8v3gtVqkbGKDrglNkEYd3sk2N3fnxt3tU/aERYdCW554wD7wOrWlmnhVLDaOWX3IStxDlpbUrEnt0UmIAvUBujE+esFxh8ODoS179+xhP0g9Bq9VW/5uzLHQOsmuZs/eeR28DjRZhk16w3zIhoHKoBvjo4fusTM8RAvx8pOPgdeqLWVKl6xWQ9RHXqvccv5p8BrQ5Glfqu+zKGQfQzfGR7cetgE8QAtRTiSQH+nQ9WpLWW672QbrVDxgOZuAlkOXq//ptAj3L65EN8hHfTpOJe6LExYpG9xU6tBF2T/hwSsugPeZJtPQ6Dnfh2xGHYtukI+uMngQPDwLVQ5l9GWCvYy6f73fXvlRZrnqISPm5odug/eVJln19OKQ5VzZ9imbZaPDsxh9O4Rxxm3X2I3XXqOkNZB5zbIZ97zZ0+D9ownXqFsWh6x9Qa0Ib5CH7rzVZvDgLEY5+gVds2Kd31ib/1GqowdRDlph+fxsEB9mWtBk6L45nt/ph8j54OhG+eYZRxwID85ilK/ff3003osTWlJmH8jRNaP339tuuObqBb1K6NWjh91j+63sfZef59U5aDQhZlJH/jhkjX4e3ijPfGD8WHhwFqsPixMKce6safbNyffnX4H88bzf2nNHHZL34l8fmT82Rlbj+TCjgibXXKB3+lHIRkbdjG6Ub75T+1AsNzhpTV8WJ1Dqu/Ia9kchmwvUSehG+ejPttgUHpzF6sPiBEr9Vn3SaUlcyG6Pb5h/yo8y6NAs1sH9l+cafUrLqdHPLBWysvyLG8UUr7z382m+7CJlGhO6dpQmV/XHpUJWcP/ja/jG+ed1Z54MD81iXXnQALsgXQevHaVJVF6/LjNkw0Ddh26cj37x/NP5r+Do4CxW2WIQXTtKk2guXbfjMkNWdvFGN85XLzz+CHhoFuvxI/eE143SJGrnTO6/zJCNGtUW6Mb5quzwL5Pf0cFZjOsMXQVeN0oTp9HvLTNgBdvQ0C00ah68kZ56zL57wIOzGGXV1EfTa+B1ozRZKt1iyApc+dV+ZVcndHAW6zN3XAuvG6UJ8/ethqxL4d/FoJHeuus2m8ODsxgfm3AJvGaUJkk3UB3ZashmM2o3dCN9dsr14+HBWYy3X3QGvGaUJsXQqG+XWk67JDZd0zsMdIhurK/KxtiySxQ6PAtVNlNB14zSxGjUG60G7CJcULwAb6zH+rTUlnNlKS2dYaAmFRSyfC/bMX1anPDGk/fB60VpUmxxpdeSyD6I6Mb6rg+LE7p17cpjWCgtpU31mxQUsgvny+rP4Q32WB8WJ6w9dAi8TpQmRclMa8d1KShkhcjox9GN9t1R++4OD9LW3H27LeE1ojRBqoIDNh+ygTohBo322v95+PayHmvdUWX3MHSNKE2KbiR7SVEhO69ZryJzvtAN9924Lk6QY3P+Me0heH0oTYq5TN3WRYWsEAbqRXTDfTeuixP2GbEdvDaUJkf1SVHvYxeHrFEX4xvvt7I4YaO14rc4Yda9N8FrQ2lSdM/5n4oO2HzINukN0Y1PgrKqCh2qP3Sv4dvAa0JpojTq8HaFrBDxSJoOO7+x1m6+wbrwcBX79O5lX39yErwmlCbFMND/tZkZgzoSsleiO5EEZ0+6yfbo3g0esrLkF10LSpNkGKjGdgdsPmTTekt0J5Li3ZeeDQ1YHjdDaekNjb60QyGbD9pAvY7uSFIcP+ZYSMDusf1W+dcW6P5TmjTbNXVrSWSSLbojSXLi2FNtz+7dKxawo/ff2375wtPwflOaPNXH7Zq6tSTZptp1uDChtJr7J+b3DihnuPbu2cPec+k58L5SmliNuqXDAbsIebkL71DC/LD+MbvbtluWJWDXXW1V+5cHb4X3kdIkm2tMDS9ZyOaM+g26Q0lUFivcefFZdsX+K5QkXOU1xBlHHGg/nfkEvG+UJlqj3rXWdi5ZyNpZtQPCQC+Adyyhfv7cFHvz2FPbPZ92yOCBduyxh9m3pjwA7wulVaFRfyhZwC7ChexD8I5Vgf/39J/sHRedaY/aezc7bJ01bd/evReHqSwmkCA+ZPef2bOOOij/I9qLD99us2kFbzelVWWmdvOSh2wurXaGd6xKZYhSGifV6yUP2EVEXGZLKa1yw0BdVraQDQM9Ft1BSilFGmbqNihbyNrmqYNdimfRnaSUUoQu/5rLFrCLCI2+F91RSilFWPCx3x1Bjr3lCjBKabUZBvorO3tKv7KHrOD+sufQHaaU0opq1M0VCdh8yBp9ILzDlFJaSd23+IqFrK2p6er+0rfhnaaU0goo394rFrCLyGX0GHTHKaW0Ipq6wyoesrahoVdk9EfwzlNKaTl1OWdfqelR8ZAVQqMugBeAUkrLqroCErCCbZ6xggvaL/BFoJTS0uvyLbegKbU6LGSFiCfaUkoTamj0/dCAFWw6NZCjWUpp0nQB+03YmNoInbF5IqMvRxeEUkpLqtE16GxdTP7dbKD+Ay8KpZSWyFxQvxU6W38Ejw6nlCZGo2rRmboUsnGCnEMOLw6llHbQkp5EW0p4qi2l1HuNehadpS1im5u7R0b/DV4kSiltp9m03h2dpa3CHboopb4aGpVGZ2ibWGs7h4FqRBeLUkqLUQ4jyAVqe3SGFkQundpWJvKii0YppYXqQvYRdHYWBc8Co5T6YhjoBQsaa9dE52ZRzG2sX8kF7efo4lFKaQFeic7MdhEG6swYFI9SSlvW6PdsQ0NfdF62C5nSFRr1CryIlFLagm4weDA6KztELtA78QhxSmk8VRqdkSUhDPRd+GJSSun3ulwKw0zdBuh8LAl2VmalE2AAAA5PSURBVO0AngdGKY2TYaDGobOxpMhpj+iiUkqpKL8VWaV6onOx5Mj2YejiUkqr2zDQ/5UFU+g8LAvzZ09flZt7U0qhGnUNOgvLiuvkKHiRKaXVqVFv2HRNb3QOlh3X0SnwYlNKq8r8a4K4bsZdauwLasUoUJ+gi04prSr9XDrbXkKTOigGRaeUVoGh0U2yAhWdexUnDNTd6OJTSpNtaNS8sElviM47CPal+j7yIhp9ESilyTUXqJPQWQclSust3VA+Ql8ISmkCNfpxdMbFAheyZ8MvBqU0Yaq3bPOMFdD5FgvkXDBO66KUlko56SAKUpuhsy1W2DmT+7vivI2+OJTSBJjWo9GZFkuiRrVFGKgs/AJRSr3VZch96CyLNZGpOxF9kSilfuoC9sWqWDbbUTh/llJatEZ9OD89bSg6v7zAvlLTIwz0bPhFo5R6oZxykMvoHdDZ5RVzzcyV3SfTP9EXj1Lqg+oEdGZ5SZSp3Tw0ej7+AlJKY+wEdFZ5jRxbw9NuKaXLMgzUY9aO64LOKe9xIXsB+mJSSuNlGOhZtqGhFzqfEoMr6K3oi0opjY1vy77U6FxKFLampqsr7NQYXFxKKVT1QTaoXxudSYnEzp7SLzR6Dv4iU0oR5g9ibarfBJ1FiWZepnaI7K6DvtiU0soqm29zLmyFkK8KsroDfdEppZXRBWwuNHV7o7OnqojSdZuGgf4MffEppeU1H7AZdQA6c6qSXLpuR/kKgb4JKKXlceEINnUQOmuqmlygd2LQUpo83TfV/7o/j0BnDHFkM3pP7kNLaXJ0z/PXUVofis4W8gMWBq0O0TcHpbRjysGqLmQPRmcKWQYuZPfjybeU+qtsCJVNp/ZCZwlpBZnmsfAQNfwNQyktXDd6nZsN6n6OzhBSANmM2o0/hlHqj+55/XeuSW2Dzg5SBDmjRrivHl+ibx5KaVuqf4SNqY3QmUHagXwyuqD9F/4mopQuyzDQ/zOvWa+CzgrSAbKz1bruYr6NvpkopUto9EwbqOXRGUFKgJxg6T4xX4bfVJTSvGGgJtnm5u7obCAlxM6Z3D80+nn0zUVpNZs/Ssroy9F5QMqETdf0dhe4Bn2jUVqNyhQtN9AZic4BUmastZ0jo65G33CUVpVGvRsFqc3Qzz+pIG5EexxXh1FafuU1nWy2j37mCYCs0bvkj7OIwY1IadJc+P5VXSPn86GfdQJEpnhx5gGlpVUWAjkPRD/fJCbYl+r7uBHtY+gbk9Ik6AYtfw2b9Ibo55rEkFygTsrvYxmDG5VSHw2N+pNtnroc+lkmMSZrUnu4T+JP0TcrpT4p5+3xmBhSMPNnT1+VCxcoLUz37a9xQWPtmujnlniG/CIqK1Nc2H6DvokpjaNyyKE8I5w9QDqEHGsTBeoT9A1NaZxcOCOHiwtIiZjbWL9SZNQ09I1NKdr8CbIy91WpnujnkiQMWY6by+gxcgYR+kanFKGMXnPp1LboZ5EkHJn/54L2L+gbntJKKadAu3v+Um5NSCqGbWjo5m68i3gEOU267h6fHQZqGPqZI1VKNp1aj1O9aBKVPT3cvX2GteO6oJ8zUuXI9BV3M57Nd7U0CX73w9bNssk9+tki5Edkm2rXcTdpHfohobS9uoCdFWVqN0c/S4S0iiwtjIx+D/3AUFqwRv9fGKiD0c8OIQVjGxr6RoG6npvN0DgbGv25u0fP5ZxX4i3yq6wLW41+mCj9oe6+zLrR6422eepg9DNCSEnIpvXu3BicopVvVrIVYTaoXxv9TBBScmQidzatTnNf0f6FfthodSmbHLlwfTg009dHPweElB0bqOXdV7Ub0A8eTb75kWugHwxN7cbo+56QivLddC/4Q0iTqWxB6Eav98piGfS9TgiE/Gg2Bg8jTZZu1PpVFKibuIE2IZ1k5gH3PaAl0uiP8ptnp1MD0fc1IbHBjTg+gD+c1GvDQGWitDqKu2MRsgzk2GT0Q0r90903C1y4Tspl6rZG38OExBr39W4m+oGlHmnUG7IREV8JEFIgbkTyKPzBpbHWheqXbtR6d64xNRx9vxLiHW5kcgv6Iabxc+FWg/Itp+4Y2zx1OfR9Soi3yK/B6AeaxkijXw2NOn9es14FfW8SkgiyQepU+INNYbpA/TY0usmNXC+UxSno+5GQxBEZdTj6QacVDtZA/zd/ZpbRZ8wP1Groe5CQRJPNqN3QDz2tiO+7UL1HNsXmkS6EVJAoSG0WgwCgJTY0al5kdL0bsZ4Xpes2Rd9nhFQt89PThqIDgZYqVFVK3q3KVCuuviIkJsiRH+iAoO3Q6L+5r/8P5Iz6TdSotrANDd3Q9xIhpAUW7poUg+CgS/ndKQKv5De7DvTYrEntYTMzBqHvGUJIEcgpoegwqXbdqDSSMI0C9YT75ytlw5VcUL+VG6H2Qt8fhJAOkt9FKQZBk3zVP1yQviDnW7kPtvGRSR2fDVK7yllX/LpPSIJxAVCHD6BkKwdYMkgJqVLkBxR0CCVZWVWVNXoX9HUmhIBwX2OvQwdRkpXXA+hrTAgB4kLgAnQQJVVX2y/mZWqHoK8xIQRIZOpORIdRUpX9AdDXlxACJgzq9keHURJ1o9j/5corQkinnFEj0IGUNOXHrlxa7Yy+toSQGBA2pjZCh1LSlBkb6OtKCIkJskwTHUpJUs7E4skChJDFWDuuS/5MpxgEVBJ0IXs6+poSQmKGC9lP0eGUBF3AzuHKLkLIUriAeA0dUL7rAvabXEbvgL6WhJAYIhuXoEMqAU5EX0dCSEyJjH4qBiHls+/bQC2Pvo6EkJgSBvrOGASVt4ZGH4i+hoSQGBMZdRU6qDxWoa8fISTmhIE6KwZh5Z1uBDtfNt1GXz9CSMxxgTEKHVg+Kh9O6GtHCPGA0NTtjQ4s3wyNeolzYgkhBZFrUtugQ8sn83NiTe126OtGCPGErNFroYPLK42+EX3NCCEe4b729oUHly8a9U87e0o/9DUjhHhGGKgsPMA8MAz0fuhrRQjxEPcV+D10gMVeo59CXydCiKfIDlLwEIuxciji/ECthr5OhBBPiQI1HR1k8VadgL5GhBCPcSO1R/BBFlONfsZa2xl9jQghHuPCZCI8zGJofunsbLUu+voQQjwnDNRl6ECLo9m0Og19bQghCSBn1G/QgRY3Q6PScgYa+toQQhJAlNaHokMtToaBDt3ofhj6uhBCEkI2SO2KDrY46Uax56OvCSEkQUTpuk3RwRYX86fONjd3R18TQkiCmNesV0GHWxwMA/V1lNZboq8HISRhyMjNfUX+Fh1ycI0ej74WhJCEIktH4SEHVb1uGxp6oa8DISShuJB5Cx90GPMbcTemhqOvASEkwbigMeiwg2n0tej6E0ISTmTUNHjYYXzNpmt6o+tPCEk4YaDui0HgVVSZTSBnnKFrTwipAuQrMzr0Ki5nExBCKoWscoKHXiVHsbLo4JWaHui6E0KqhChQv0YHX8UCNtChrHJD15wQUkW4kd1IdPhVbhTLvQkIIRVG5omiw69CAZu2NTVd0fUmhFQZYaZuA3QAlj9g9XzpJ7rWhJAqxKZTA9EhWG550gEhBIYcFpjfhSoGYVgWeSAiIQRNFKiP4WFYBkOj5vFAREIIHBdGr6ADsSym9Wh0bQkhpFMY6OfggVhqjarlawJCSCyIjH4cHool1H1ofDovUzsEXVdCCMkTGnU7OhhLFrBGfRum1a/QNSWEkMVEgboCHY4lHMXeiq4nIYT8iNDoM9DhWCJfs81Tl0PXkxBCfkSUVkfFICA7NoI1Ksc9YgkhsSSb0XuiQ7LDIRvoseg6EkLIMskF9VuhQ7JjqgZrx3VB15EQQpbJguYZa+CDsp0jWKM/X9BYuya6hoQQ0iJyoCA6LNutUYej60cIIW0i2wHCA7P4UewD6LoRQkhBuBHhu+jQLHIE+3cbqOXRdSOEkIIIA/UiPDgLH8F+k0urndE1I4SQgomMrkeHZ+GjWB7pTQjxjDDQD8HDs6BRrHqBZ3URQrwjCtRN6ABtM2AD/RmnaxFCvCQ0+hJ0iLYxgv3Whex+6DoRQki7yGX0GHSQtq66CV0jQghpN2GgDsYHaYuvCV62DQ290DUihJB2kzV6F3SYtvCaYF7YmNoIXR9CCOkQUUb/BB2oy7buGHRtCCGkw8w1M1fGB+pSrwkeRdeFEEJKgm1o6Ca/4KOD9XvVW1w2SwhJFDIPFR+u+RFsGKX1luh6EEJISYmM/hs6YPMha/Tp6FoQQkjJCQPViA5YZ521tjO6FoQQUnKiQD0NDth3bGbGIHQdCCGkLLiv6ffiXhGoXK4xNRxdA0IIKRuRUdfwPSwhhJSJMNDnQQI2UI+h+04IIWUnMqnjKx+y6k3OhyWEVAVhJvXLCo9gs1Gj2gLdb0IIqQi5QG1f0VGsGzmj+0wIIRUjm06tV7FRrNH3oPtLCCEVxc6Z3L8yrwn0y7Z56nLo/hJCSEWRlVZuhBmV+T3sXO4PSwipWiKjPixzyB6M7iMhhMCQr/LlC1me00UIqXLcSPbZMv3QZewrNT3Q/SOEECiR0TVlGMF+Mj9Qq6H7RgghcMJA31rid7BfyyGN6H4RQkgscCPZ8SUO2bPQfSKEkNggu2GV7j2segTdH0IIiRUuHI8ozQhWv2xfqu+D7g8hhMSKrEntUYKA/UyW6KL7QgghsUN2xergVK1vXMjui+4HIYTEknnNepUO/tB1GboPhBASa6JAfdzOkJ1q7bgu6PYTQkiscSF7XfEBq960zTNWQLedEEJij51VOyA06t9FvCKYGzXVb4JuNyGEeEMY1O0vq7UKmAv7bZTWh6LbSwgh3uFCdFT+HK7WR7Hj0O0khBBvkQ22I6OfyY9YfzxV68ucUaeg20cIIYlgQVNq9SitR4eBPk823uaPXIQQQgipSv4f3YSDpseNC/kAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

export default SpeechBubbleIcon;