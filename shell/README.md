- `kill -l` - lists all signals
- `SIGTERM` - soft kill, should be tried first i.e. kill -15 PID
- `pidof node | xargs kill -15` - find process ID of node and quit gracefully
- `ps aux` - list all processes
- `lsblk -o name,uuid,mountpoint` - wypisuje  informacje  o  wszystkich dostępnych lub podanych urządzeniach blokowych
