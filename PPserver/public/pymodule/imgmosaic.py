import cv2

face_cascade = cv2.CascadeClassifier('C:/Users/User/Desktop/ethe/PPserver/pymodule/data/haarcascade_frontalface_default.xml')

src = cv2.imread('C:/Users/User/Desktop/ethe/PPserver/pymodule/image/testface.jpg')
src_gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)

faces = face_cascade.detectMultiScale(src_gray)

ratio = 0.1

for x, y, w, h in faces:
    small = cv2.resize(src[y: y + h, x: x + w], None, fx=ratio, fy=ratio, interpolation=cv2.INTER_NEAREST)
    src[y: y + h, x: x + w] = cv2.resize(small, (w, h), interpolation=cv2.INTER_NEAREST)

cv2.imwrite('C:/Users/User/Desktop/ethe/PPserver/pymodule/image/testface_mosaic1.jpg', src)