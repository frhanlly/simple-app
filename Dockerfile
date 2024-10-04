FROM node:20.17-alpine3.19
EXPOSE 3000

RUN adduser -D app && mkdir /app && chown app:app -R /app
WORKDIR /app
COPY . .

RUN npm install 



ENTRYPOINT ["node"]


CMD ["main.js"]
