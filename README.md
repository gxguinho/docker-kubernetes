# docker-kubernetes

docker build -t gxguinho/microservice-tweet .
docker run --rm -p 8001:8001 gxguinho/microservice-tweet
docker push gxguinho/microservice-tweet

kind create cluster --config=k8s/kind.yaml --name=microservices

kubectl apply -f .\k8s\configmap-env-tweet.yaml
kubectl apply -f .\k8s\configmap-env-user.yaml

kubectl get pods
kubectl get deployments
kubectl get  svc
kubectl get  hpa

kubectl apply -f .\k8s\service-tweet.yaml
kubectl apply -f .\k8s\service-user.yaml

kubectl apply -f .\k8s\hpa-tweet.yaml
kubectl apply -f .\k8s\hpa-user.yaml

kubectl apply -f .\k8s\metrics-server.yaml

kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://microservice-user-service/gxguinho"
kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://microservice-tweet-service/get-tweet/clnbtbvh50000ld30vbty2f70"