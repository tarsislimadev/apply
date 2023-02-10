FROM tmvdl/android:app

WORKDIR /app

RUN cordova create apply com.brtmvdl.apply apply

WORKDIR /app/apply

COPY www/html www

RUN cordova platform add android

RUN cordova build android
