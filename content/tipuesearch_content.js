var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'w4-w5', 'text': '\n \n \n \n \n \n', 'tags': '', 'url': 'w4-w5.html'}, {'title': 'w6-w7', 'text': '\n', 'tags': '', 'url': 'w6-w7.html'}, {'title': '程式練習-1 程式碼練習', 'text': '1- 顯示前十個自然數 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nint main() {\nint i;\n\n// 打印一條顯示程式意圖的消息\nprintf("前10個自然數是：\\n");\n\n// 循環遍歷前10個自然數並打印每個數字\nfor (i = 1; i <= 10; i++) {\nprintf("%d ", i); // 打印當前數字\n}\n\n// 返回0以表示成功執行\nreturn 0;\n}\n\n \n 2-\xa0 計算前 10 個自然數的和 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nint main() {\nint j, sum = 0; // 宣告整數變量j和sum，並初始化sum為0。\n\nprintf("前10個自然數是 :\\n");\n\n// 進行迴圈，從1到10，計算總和，並打印每個數字\nfor (j = 1; j <= 10; j++) {\nsum = sum + j; // 將當前數字加到總和中\nprintf("%d ", j); // 打印當前數字\n}\n\nprintf("\\n總和為 : %d\\n", sum); // 打印總和\n\n// 返回0以表示成功執行\nreturn 0;\n} \n 3-\xa0 顯示整數的立方 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nint main() {\nint i, ctr; // 宣告變量 \'i\' 作為循環計數器和 \'ctr\' 作為用戶輸入。\n\nprintf("輸入項目的數量 : "); // 打印消息以提示用戶輸入。\nscanf("%d", &ctr); // 從用戶讀取 \'ctr\' 的值。\n\nfor (i = 1; i <= ctr; i++) { // 開始一個循環，遍歷 \'ctr\' 次。\nprintf("數字是 : %d，%d 的立方是 : %d \\n", i, i, (i * i * i)); // 打印數字、其立方和相應的消息。\n}\n\nreturn 0; // 返回0以表示成功執行。\n} \n 4-\xa0 讀取任意月份的整數並顯示該月的天數 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nvoid main() {\nint monno; // 宣告一個整數變量 \'monno\' 用於存儲月份編號。\nchar monnm[15]; // 宣告一個字符數組 \'monnm\' 用於存儲月份名稱。\n\nprintf("輸入月份編號 : "); // 打印消息以提示用戶輸入月份編號。\nscanf("%d", &monno); // 從用戶讀取月份編號的值。\n\nswitch (monno) { // 使用 switch 语句根据月份編號執行相應的代碼塊。\ncase 1:\ncase 3:\ncase 5:\ncase 7:\ncase 8:\ncase 10:\ncase 12:\nprintf("該月有31天。 \\n");\nbreak;\ncase 2:\nprintf("第2個月是二月，有28天。 \\n");\nprintf("在閏年中，二月有29天。\\n");\nbreak;\ncase 4:\ncase 6:\ncase 9:\ncase 11:\nprintf("該月有30天。 \\n");\nbreak;\ndefault:\nprintf("無效的月份編號。\\n請重試....\\n");\nbreak;\n}\n} \n 5-\xa0 接受兩個整數並檢查它們是否相等 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nvoid main() {\nint int1, int2; // 宣告兩個整數變量 \'int1\' 和 \'int2\'。\n\nprintf("輸入Number1和Number2的值 : "); // 打印消息以提示用戶輸入Number1和Number2的值。\nscanf("%d %d", &int1, &int2); // 從用戶讀取Number1和Number2的值。\n\nif (int1 == int2) {\nprintf("Number1和Number2相等\\n"); // 如果Number1等於Number2，則打印相等的消息。\n} else {\nprintf("Number1和Number2不相等\\n"); // 如果Number1不等於Number2，則打印不相等的消息。\n}\n}\n\n \n 6-\xa0檢查給定的數字是偶數還是奇數 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nvoid main() {\nint num1, rem1; // 宣告兩個整數變量 \'num1\' 和 \'rem1\'。\n\nprintf("輸入一個整數 : "); // 打印消息以提示用戶輸入一個整數。\nscanf("%d", &num1); // 從用戶讀取整數的值。\n\nrem1 = num1 % 2; // 使用取餘運算符計算 \'num1\' 除以2的餘數，存儲在 \'rem1\' 中。\n\nif (rem1 == 0) {\nprintf("%d 是一個偶數\\n", num1); // 如果 \'rem1\' 等於0，則 \'num1\' 是偶數，打印相應的消息。\n} else {\nprintf("%d 是一個奇數\\n", num1); // 如果 \'rem1\' 不等於0，則 \'num1\' 是奇數，打印相應的消息。\n}\n} \n 7-\xa0 檢查給定的數字是正數還是負數 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nvoid main() {\nint num; // 宣告一個整數變量 \'num\'。\n\nprintf("輸入一個數字 :"); // 打印消息以提示用戶輸入一個數字。\nscanf("%d", &num); // 從用戶讀取數字的值。\n\nif (num >= 0) {\nprintf("%d 是一個正數 \\n", num); // 如果 \'num\' 大於或等於0，則 \'num\' 是正數，打印相應的消息。\n} else {\nprintf("%d 是一個負數 \\n", num); // 如果 \'num\' 小於0，則 \'num\' 是負數，打印相應的消息。\n}\n}\n\n \n 8-\xa0 將攝氏度轉換為華氏度 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nfloat temp_f; /* 華氏溫度 */\nfloat temp_c; /* 攝氏溫度 */\nchar line_text[50]; /* 一行輸入 */\n\nint main() {\nprintf("輸入溫度（攝氏度）: "); // 提示用戶輸入攝氏溫度。\nfgets(line_text, sizeof(line_text), stdin); // 從用戶讀取一行輸入，並將其存儲在 \'line_text\' 中。\nsscanf(line_text, "%f", &temp_c); // 將 \'line_text\' 中的輸入轉換為浮點數，並將其存儲在 \'temp_c\' 中。\n\ntemp_f = ((9.0 / 5.0) * temp_c) + 32.0; // 將溫度從攝氏度轉換為華氏度，並將其存儲在 \'temp_f\' 中。\nprintf("%f degrees Fahrenheit.\\n", temp_f); // 打印以華氏度表示的溫度。\n\nreturn 0; // 返回0以表示程序成功執行。\n} \n 9-\xa0 將公里每小時轉換為英哩每小時 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nfloat kmph; /* 每小時公里數 */\nfloat miph; /* 每小時英里數（將被計算） */\nchar line_text[50]; /* 鍵盤輸入的一行文字 */\n\nint main()\n{\nprintf("輸入每小時公里數: "); // 提示用戶輸入每小時公里數。\nfgets(line_text, sizeof(line_text), stdin); // 從用戶讀取一行輸入，並將其存儲在 \'line_text\' 中。\nsscanf(line_text, "%f", &kmph); // 將輸入轉換為浮點數，並將其存儲在 \'kmph\' 中。\n\nmiph = (kmph * 0.6213712); // 將每小時公里數轉換為每小時英里數。\nprintf("%f 英里每小時\\n", miph); // 以每小時英里數的形式打印結果。\n\nreturn 0; // 返回0以表示程序成功執行。\n} \n 10- 輸入 小時和分鐘數，計算總分鐘數 \n #include <stdio.h> // 包含標準輸入/輸出頭文件。\n\nint hrs; /* 給定的小時數 */\nint mins; /* 給定的分鐘數 */\nint tot_mins; /* 總分鐘數（將被計算） */\n\nconst int MINaHOUR = 60; /* 一小時的分鐘數 */\n\nchar line_text[50]; /* 鍵盤輸入的一行文字 */\n\nint main() {\nprintf("輸入小時: "); // 提示用戶輸入小時。\nfgets(line_text, sizeof(line_text), stdin); // 從用戶讀取一行輸入，並將其存儲在 \'line_text\' 中。\nsscanf(line_text, "%d", &hrs); // 將輸入轉換為整數，並將其存儲在 \'hrs\' 中。\n\nprintf("輸入分鐘: "); // 提示用戶輸入分鐘。\nfgets(line_text, sizeof(line_text), stdin); // 從用戶讀取一行輸入，並將其存儲在 \'line_text\' 中。\nsscanf(line_text, "%d", &mins); // 將輸入轉換為整數，並將其存儲在 \'mins\' 中。\n\ntot_mins = mins + (hrs * MINaHOUR); // 計算總分鐘數。\n\nprintf("總共: %d 分鐘。\\n", tot_mins); // 打印總分鐘數。\n\nreturn 0; // 返回0以表示程序成功執行。\n} \n \n \n \n \n \n \n', 'tags': '', 'url': '程式練習-1 程式碼練習.html'}, {'title': '程式練習-2 繪製國旗', 'text': '1.繪製台灣國旗 \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\xa0\nvoid\xa0draw_roc_flag(gdImagePtr img);\nvoid\xa0draw_white_sun(gdImagePtr img,\xa0int\xa0x,\xa0int\xa0y,\xa0int\xa0size,\xa0int\xa0color);\n\xa0\nint\xa0main() {\n\xa0\xa0\xa0\xa0// width 3: height 2\n\xa0\xa0\xa0\xa0int\xa0width = 1200;\n\xa0\xa0\xa0\xa0// 國旗長寬比為 3:2\n\xa0\xa0\xa0\xa0int\xa0height = (int)(width*2.0 / 3.0);\n\xa0\n\xa0\xa0\xa0\xa0gdImagePtr img = gdImageCreateTrueColor(width, height);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(img, 0);\n\xa0\n\xa0\xa0\xa0\xa0draw_roc_flag(img);\n\xa0\n\xa0\xa0\xa0\xa0FILE\xa0*outputFile =\xa0fopen("./../images/roc_flag_in_gd.png",\xa0"wb");\n\xa0\xa0\xa0\xa0if\xa0(outputFile == NULL) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr,\xa0"Error opening the output file.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return\xa01;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0gdImagePngEx(img, outputFile, 9);\n\xa0\xa0\xa0\xa0fclose(outputFile);\n\xa0\xa0\xa0\xa0gdImageDestroy(img);\n\xa0\xa0\xa0\xa0return\xa00;\n}\n\xa0\nvoid\xa0draw_roc_flag(gdImagePtr img) {\n\xa0\xa0\xa0\xa0int\xa0width = gdImageSX(img);\n\xa0\xa0\xa0\xa0int\xa0height = gdImageSY(img);\n\xa0\xa0\xa0\xa0int\xa0red, white, blue;\n\xa0\xa0\xa0\xa0// 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n\xa0\xa0\xa0\xa0int\xa0center_x = (int)(width/4);\n\xa0\xa0\xa0\xa0int\xa0center_y = (int)(height/4);\n\xa0\xa0\xa0\xa0// gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n\xa0\xa0\xa0\xa0// 由於中央白日圓形的半徑為青天寬度的 1/8\n\xa0\xa0\xa0\xa0// 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n\xa0\xa0\xa0\xa0// 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n\xa0\xa0\xa0\xa0int\xa0sun_radius = (int)(width/8);\n\xa0\xa0\xa0\xa0// 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n\xa0\xa0\xa0\xa0int\xa0white_circle_dia = sun_radius;\n\xa0\xa0\xa0\xa0// 中央藍色圓形半徑為中央白日的 1又 2/15\n\xa0\xa0\xa0\xa0int\xa0blue_circle_dia = white_circle_dia +\xa0 white_circle_dia*2/15;\n\xa0\xa0\xa0\xa0// 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n\xa0\xa0\xa0\xa0red = gdImageColorAllocate(img, 255, 0, 0);\xa0// 紅色\n\xa0\xa0\xa0\xa0white = gdImageColorAllocate(img, 255, 255, 255);\xa0// 白色\n\xa0\xa0\xa0\xa0blue = gdImageColorAllocate(img, 0, 0, 149);\xa0// 藍色\n\xa0\xa0\xa0\xa0// 根據畫布大小塗上紅色長方形區域\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, width, height, red);\n\xa0\xa0\xa0\xa0// 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\xa0\xa0\xa0\xa0// 先設法以填色畫出六個白色堆疊菱形\n\xa0\xa0\xa0\xa0draw_white_sun(img, center_x, center_y, sun_radius, white);\n\xa0\xa0\xa0\xa0// 利用一個藍色大圓與白色小圓畫出藍色環狀\n\xa0\xa0\xa0\xa0gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n\xa0\xa0\xa0\xa0gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\xa0\n}\n\xa0\nvoid\xa0draw_white_sun(gdImagePtr img,\xa0int\xa0center_x,\xa0int\xa0center_y,\xa0int\xa0sun_radius,\xa0int\xa0color) {\n\xa0\xa0\xa0\xa0// M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n\xa0\xa0\xa0\xa0// 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n\xa0\xa0\xa0\xa0float\xa0deg = M_PI/180;\n\xa0\xa0\xa0\xa0// 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n\xa0\xa0\xa0\xa0// 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n\xa0\xa0\xa0\xa0float\xa0sr = sun_radius/tan(75*deg);\n\xa0\xa0\xa0\xa0int\xa0ax, ay, bx, by, dx, dy, ex, ey;\n\xa0\xa0\xa0\xa0gdPoint points[4];\n\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0ax = center_x;\n\xa0\xa0\xa0\xa0ay = center_y - sun_radius;\n\xa0\xa0\xa0\xa0bx = center_x - sun_radius*tan(15*deg);\n\xa0\xa0\xa0\xa0by = center_y;\n\xa0\xa0\xa0\xa0ex = center_x;\n\xa0\xa0\xa0\xa0ey = center_y + sun_radius;\n\xa0\xa0\xa0\xa0dx = center_x + sun_radius*tan(15*deg);\n\xa0\xa0\xa0\xa0dy = center_y;\n\xa0\xa0\xa0\xa0// 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n\xa0\xa0\xa0\xa0for\xa0(int\xa0i=1;i<=6;i++){\n\xa0\xa0\xa0\xa0// A\n\xa0\xa0\xa0\xa0points[0].x = ax+sun_radius*sin(30*deg*i);\n\xa0\xa0\xa0\xa0points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n\xa0\xa0\xa0\xa0// B\n\xa0\xa0\xa0\xa0points[1].x = bx+sr-sr*cos(30*deg*i);\n\xa0\xa0\xa0\xa0points[1].y = by-sr*sin(30*deg*i);\n\xa0\xa0\xa0\xa0// E\n\xa0\xa0\xa0\xa0points[2].x = ex-sun_radius*sin(30*deg*i);\n\xa0\xa0\xa0\xa0points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n\xa0\xa0\xa0\xa0// D\n\xa0\xa0\xa0\xa0points[3].x = dx-(sr-sr*cos(30*deg*i));\n\xa0\xa0\xa0\xa0points[3].y = dy+sr*sin(30*deg*i);\n\xa0\xa0\xa0\xa0// 對菱形區域範圍塗色\n\xa0\xa0\xa0\xa0gdImageFilledPolygon(img, points, 4, color);\n\xa0\xa0\xa0\xa0// 在菱形區域外圍畫線, 明確界定菱形範圍\n\xa0\xa0\xa0\xa0gdImagePolygon(img, points, 4, color);\n\xa0\xa0\xa0\xa0}\n}\n \n \n 2. 繪製美國國旗 \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>// 函數聲明\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);int main() {\n// 設置圖像寬高\nint width = 800;\nint height = (int)(width / 1.9);// 創建一個真彩色圖像\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);// 繪製美國國旗\ndraw_usa_flag(img);// 打開輸出文件\nFILE *outputFile = fopen("./../images/usa_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打開輸出文件時出錯。\\n");\nreturn 1;\n}// 將圖像保存為PNG文件\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);return 0;\n}void draw_usa_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 國旗顏色\nred = gdImageColorAllocate(img, 178, 34, 52); // 紅色條紋\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色條紋\nblue = gdImageColorAllocate(img, 60, 59, 110); // 藍色矩形int stripe_height = height / 13;\nint stripe_width = width;\nint star_size = (int)(0.0308 * height); // 星星大小// 繪製紅白條紋\nfor (int y = 0; y < height; y += stripe_height) {\nif (y / stripe_height % 2 == 0) {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n} else {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n}\n}// 繪製藍色矩形\ngdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);int star_spacing_x = (int)(0.129 * height); // 橫向星星之間的間距\nint star_spacing_y = (int)(0.054 * height); // 縱向星星之間的間距\nint star_start_x = (int)(0.125 * height); // 星星的起始X位置\nint star_start_y = (int)(0.0485 * height); // 星星的起始Y位置// 繪製星星\nfor (int row = 0; row < 9; row++) {\nint starsPerRow = (row % 2 == 0) ? 6 : 5;// 計算2、4、6和8排星星的偏移量\nint offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;for (int star = 0; star < starsPerRow; star++) {\nint x = star_start_x + star * star_spacing_x + offset_x;// 旋轉角度（以弧度為單位）\ndouble rotation_angle = M_PI / 5; // 忘記多少度的旋轉int y = star_start_y + row * star_spacing_y;\ndraw_star(img, x, y, star_size, white, rotation_angle);\n}\n}\n}void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\ngdPoint points[10];for (int i = 0; i < 10; i++) {\ndouble angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\nint radius = (i % 2 == 0) ? size : size / 2;\npoints[i].x = x + radius * cos(angle);\npoints[i].y = y + radius * sin(angle);\n}// 用指定的顏色填充星星\ngdImageFilledPolygon(img, points, 10, color);\n}\n\n\n \n \n \n \n 3. 繪製日本國旗 \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\n\nint main() {\nint width = 800;\nint height = 600;\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\n// 將背景填充為白色\nint white = gdImageColorAllocate(img, 255, 255, 255);\ngdImageFilledRectangle(img, 0, 0, width, height, white);\n\n// 繪製日本國旗\ndraw_japan_flag(img);\n\nFILE *outputFile = fopen("Y:/home_ipv6/japan_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打開輸出文件時出錯。\\n");\nreturn 1;\n}\n\n// 保存圖像\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\n\n// 銷毀圖像\ngdImageDestroy(img);\n\nreturn 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\n\n// 計算日本國旗的位置和尺寸\nint red = gdImageColorAllocate(img, 178, 34, 52); // 紅色圓圈\nint circle_diameter = (int)(0.6 * height);\n\n// 手動調整圓圈的位置，這裡進行了微調\nint circle_x = (width - circle_diameter) / 2 + 175;\nint circle_y = (height - circle_diameter) / 2 + 190;\n\n// 繪製紅色圓圈\ngdImageFilledEllipse(img, circle_x, circle_y, circle_diameter, circle_diameter, red);\n} \n \n 4. 繪製德國國旗 \n #include <stdio.h>\n#include <gd.h>\n\nvoid draw_france_flag(gdImagePtr img);\n\nint main() {\nint width = 900;\nint height = 600;\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\n// 將背景填充為白色\nint white = gdImageColorAllocate(img, 255, 255, 255);\ngdImageFilledRectangle(img, 0, 0, width, height, white);\n\n// 繪製法國國旗\ndraw_france_flag(img);\n\nFILE *outputFile = fopen("Y:/home_ipv6/france_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打開輸出文件時出錯。\\n");\nreturn 1;\n}\n\n// 保存圖像\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\n\n// 銷毀圖像\ngdImageDestroy(img);\n\nreturn 0;\n}\n\nvoid draw_france_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\n\n// 計算法國國旗的條紋寬度\nint stripe_width = width / 3;\n\n// 設定顏色\nint blue = gdImageColorAllocate(img, 0, 35, 149);\nint white = gdImageColorAllocate(img, 255, 255, 255);\nint red = gdImageColorAllocate(img, 239, 65, 53);\n\n// 繪製藍色條紋\ngdImageFilledRectangle(img, 0, 0, stripe_width, height, blue);\n\n// 繪製白色條紋\ngdImageFilledRectangle(img, stripe_width, 0, 2 * stripe_width, height, white);\n\n// 繪製紅色條紋\ngdImageFilledRectangle(img, 2 * stripe_width, 0, width, height, red);\n} \n \n', 'tags': '', 'url': '程式練習-2 繪製國旗.html'}, {'title': 'w12', 'text': '可攜系統中 home_ipv6 目錄中的 .gitconfig \n \n \n \n \n \n \n \n \n \n \n [http] \n \xa0\xa0\xa0\xa0 proxy = http: //p4.cycu.org:3128 \n [user] \n \xa0\xa0\xa0\xa0 name = 你的 github 帳號 \n \xa0\xa0\xa0\xa0 email = 登記在 github 帳號的 email \n [safe] \n \xa0\xa0\xa0\xa0 directory = * \n [http  "https://github.com" ] \n sslVerify =  false \n [pull] \n \xa0\xa0\xa0\xa0 rebase =  false \n \n \n \n \n \n \n \n .gitconfig 設定說明: \n [http] \xa0 \xa0 proxy = \xa0 http://p4.cycu.org:3128 \n 也可以透過命令列中輸入 git config --global http.proxy \xa0 http://p4.cycu.org:3128 \xa0取得 \n 這是設定 git 指令需要使用 http 或 https 協定擷取 cmsimde 時, 假如網路只支援 IPv6, 就必須透過代理主機連線到目前只支援 IPv4 的 github.com \n [user] \xa0 \xa0 name = 你的 github 帳號 \xa0 \xa0 email = 登記在 github 帳號的 email \n 是在 git commit -m "提交訊息" 時綁定身分用 \n [safe] \xa0 \xa0 directory = * \n 則是宣告目前所使用的檔案目錄都是 safe \n [http "https://github.com"] \xa0 \xa0 sslVerify = false \n 表示當連線到 github.com 時所使用的 key 不用登記在 Windows 操作系統中 \n [pull] \xa0 \xa0 rebase = false \n 表示 git pull 時, 並不使用 rebase, 而是直接 fetch 遠端資料, 並且進行 merge 合併 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '打開puttygen.exe ，打開之後點擊Generate創建 ssh key \n 在空白區域移動滑鼠創建ssh key\xa0 \n ssh key 創建完之後，把Public key 複製 貼到github SSH key \n 然後點 save private key 存到 home裡面 \n 打開putty.exe 點擊Session\xa0 \n Host Name 填入 github.com ， Saved Sessions 填學號 \n 點Save \n 選Connection --> Proxy， Proxy type改 HTTP CONNECT \n Proxy hostname 填入 p4.cycu.org ， port 填入 3128 \n 都用好之後點open\xa0 正常只會出現 login as : 綠框 \n 打開 start_ipv6.bat \n 再打開putty.exe 選剛剛建好的Session\xa0 點load \n ----------------------------------- \n 在cmd裡輸入指令 regedit ，打開登入編輯程式 \n HKEY_CURRENT_USER --> Software --> SimonTatham\xa0 <<--把這個展開 看有沒有剛創建好的session \n 然後對SimonTatham點右鍵匯出 存到 tmp ，再去 tmp 資料夾檢查有沒有學號_session.reg檔案 \n \n 後面忘了\xa0 \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w15', 'text': '練習題 \n \n 1) 根據  roc_list_coord_flag.7z  程式內容所印出的六組 ABED 等繪製 ROC 國旗白日圖案中的菱形四個關鍵點, 請直接在青天與滿地紅的圖案中, 利用白色作為畫線顏色, 將第二組的 ABED 等四個點的座標, 以直線相連. \n ---------------------------------------------------------------------------------------------------------------- \n 先將\xa0 roc_list_coord_flag.7z \xa0下載下來，用SciTE打開roc_list_coord_flag.c，執行一次可得到一個台灣國旗以及六組座標。 \n \n \n \n \n \n \n \n 2) 承上題, 請列出第二組 ABED 的四條直線與白日中的大圓所相交 (intersect) 的四個點座標. \n --------------------------------------------------------------------------------------------------- \n', 'tags': '', 'url': 'w15.html'}, {'title': '課程心得', 'text': '\n \n \n \n', 'tags': '', 'url': '課程心得.html'}]};