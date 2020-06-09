yarn build
tar czvf public.tar.gz public/
scp public.tar.gz pi@idbox-1.local:~/ 
ssh pi@idbox-1.local /home/pi/deploy.sh
rm public.tar.gz
