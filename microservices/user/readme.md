`
docker build -t seunome/micro-user .
docker run --rm -p 8000:8000 gxguinho/micro-user:v22
docker push gxguinho/micro-user

docker inspect mystifying_cartwright
`

create k8s kind cluster
kind create cluster --config=k8s/kind.yaml --name=user-name
kubectl cluster-info --context kind-microservice1

kubectl apply -f .\k8s\configmap-env.yaml
kubectl apply -f .\k8s\deployment.yaml

kubectl get replicasets
kubectl get pods
kubectl get deployments
kubectl get services

kubectl port-forward services/microservice-user-service 8000:80

kubectl delete  deployments microservice-user

kubectl apply -f .\k8s\metrics-server.yaml

kubectl -n kube-system get deployment/metrics-server

kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://microservice-user-service/gxguinho"

FROM node:18.14.2-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run db:generate

EXPOSE 8000

RUN npm run build:dev

WORKDIR /usr/app/dist

CMD ["node", "./server.js"]