FROM node:8.11

WORKDIR /Users/kylemccarty/Desktop/gitTest

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2112

CMD ["npm", "run build", "start"]