function localtunnel {
  lt -s lasdfdsajklfgwefido --port 4000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
