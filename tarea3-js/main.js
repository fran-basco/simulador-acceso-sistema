const usuarios = [
    {"id":1,"first_name":"Nowell","last_name":"La Croce","email":"nlacroce0@sogou.com","gender":"Male","ip_address":"177.192.61.20"},
{"id":2,"first_name":"Dennie","last_name":"de Verson","email":"ddeverson1@shinystat.com","gender":"Male","ip_address":"218.101.104.197"},
{"id":3,"first_name":"Aveline","last_name":"Schuricke","email":"aschuricke2@nifty.com","gender":"Bigender","ip_address":"166.44.157.82"},
{"id":4,"first_name":"Joe","last_name":"Grioli","email":"jgrioli3@devhub.com","gender":"Male","ip_address":"147.81.106.39"},
{"id":5,"first_name":"Colin","last_name":"Kirsch","email":"ckirsch4@ustream.tv","gender":"Male","ip_address":"108.37.185.126"},
{"id":6,"first_name":"Townsend","last_name":"Devonside","email":"tdevonside5@tmall.com","gender":"Male","ip_address":"147.148.219.210"},
{"id":7,"first_name":"Marshall","last_name":"Pickerin","email":"mpickerin6@rambler.ru","gender":"Male","ip_address":"23.218.194.60"},
{"id":8,"first_name":"Gherardo","last_name":"Bischoff","email":"gbischoff7@fc2.com","gender":"Male","ip_address":"110.173.91.25"},
{"id":9,"first_name":"Sutherlan","last_name":"Vitet","email":"svitet8@cdbaby.com","gender":"Male","ip_address":"246.45.237.87"},
{"id":10,"first_name":"Teddie","last_name":"Tame","email":"ttame9@aboutads.info","gender":"Female","ip_address":"54.182.218.141"},
{"id":11,"first_name":"Chery","last_name":"Cabbell","email":"ccabbella@scribd.com","gender":"Genderqueer","ip_address":"43.29.255.8"},
{"id":12,"first_name":"Ursula","last_name":"Gallichiccio","email":"ugallichicciob@sbwire.com","gender":"Female","ip_address":"105.120.97.59"},
{"id":13,"first_name":"Elvera","last_name":"Passmore","email":"epassmorec@hatena.ne.jp","gender":"Female","ip_address":"94.95.53.185"},
{"id":14,"first_name":"Estelle","last_name":"Holby","email":"eholbyd@lulu.com","gender":"Female","ip_address":"56.216.129.86"},
{"id":15,"first_name":"Fairleigh","last_name":"Reeve","email":"freevee@google.co.uk","gender":"Polygender","ip_address":"236.208.121.229"},
{"id":16,"first_name":"Lenci","last_name":"Geill","email":"lgeillf@dyndns.org","gender":"Male","ip_address":"45.100.206.48"},
{"id":17,"first_name":"Sander","last_name":"Lints","email":"slintsg@arizona.edu","gender":"Male","ip_address":"77.31.155.149"},
{"id":18,"first_name":"Rudyard","last_name":"Rozalski","email":"rrozalskih@usnews.com","gender":"Male","ip_address":"140.179.109.163"},
{"id":19,"first_name":"Millie","last_name":"Holtum","email":"mholtumi@delicious.com","gender":"Female","ip_address":"28.97.234.29"},
{"id":20,"first_name":"Karry","last_name":"Exroll","email":"kexrollj@lycos.com","gender":"Female","ip_address":"31.141.98.41"},
{"id":21,"first_name":"Alix","last_name":"Casin","email":"acasink@eventbrite.com","gender":"Female","ip_address":"26.60.86.183"},
{"id":22,"first_name":"Mareah","last_name":"Gaspard","email":"mgaspardl@cbsnews.com","gender":"Female","ip_address":"72.129.15.50"},
{"id":23,"first_name":"Sigismond","last_name":"Evangelinos","email":"sevangelinosm@theatlantic.com","gender":"Male","ip_address":"248.121.172.147"},
{"id":24,"first_name":"Noelani","last_name":"Bust","email":"nbustn@ucla.edu","gender":"Female","ip_address":"221.209.214.129"},
{"id":25,"first_name":"Sayres","last_name":"Jaffra","email":"sjaffrao@narod.ru","gender":"Male","ip_address":"87.167.254.102"},
{"id":26,"first_name":"Kally","last_name":"Fransewich","email":"kfransewichp@macromedia.com","gender":"Female","ip_address":"25.57.87.147"},
{"id":27,"first_name":"Jeno","last_name":"Andreazzi","email":"jandreazziq@wikimedia.org","gender":"Male","ip_address":"110.136.14.174"},
{"id":28,"first_name":"Benita","last_name":"Woolfitt","email":"bwoolfittr@ftc.gov","gender":"Female","ip_address":"157.34.248.96"},
{"id":29,"first_name":"Derby","last_name":"Gantzman","email":"dgantzmans@storify.com","gender":"Male","ip_address":"102.159.30.17"},
{"id":30,"first_name":"Farrel","last_name":"McClunaghan","email":"fmcclunaghant@pcworld.com","gender":"Male","ip_address":"150.78.117.233"},
{"id":31,"first_name":"Raynor","last_name":"Helix","email":"rhelixu@geocities.jp","gender":"Male","ip_address":"227.196.92.71"},
{"id":32,"first_name":"Callie","last_name":"Hasloch","email":"chaslochv@bbb.org","gender":"Female","ip_address":"239.28.121.201"},
{"id":33,"first_name":"Nelle","last_name":"Martonfi","email":"nmartonfiw@unicef.org","gender":"Female","ip_address":"168.53.103.213"},
{"id":34,"first_name":"Germaine","last_name":"Merriott","email":"gmerriottx@pcworld.com","gender":"Genderqueer","ip_address":"131.19.128.132"},
{"id":35,"first_name":"Raffarty","last_name":"Reder","email":"rredery@dropbox.com","gender":"Male","ip_address":"184.170.114.148"},
{"id":36,"first_name":"Levi","last_name":"Geffe","email":"lgeffez@prnewswire.com","gender":"Male","ip_address":"49.211.87.15"},
{"id":37,"first_name":"Aurilia","last_name":"Leyman","email":"aleyman10@ftc.gov","gender":"Female","ip_address":"146.152.254.227"},
{"id":38,"first_name":"Natalya","last_name":"Pigrome","email":"npigrome11@cmu.edu","gender":"Female","ip_address":"129.144.224.254"},
{"id":39,"first_name":"Celestia","last_name":"Baake","email":"cbaake12@tmall.com","gender":"Polygender","ip_address":"89.36.20.61"},
{"id":40,"first_name":"Tamiko","last_name":"Yggo","email":"tyggo13@berkeley.edu","gender":"Female","ip_address":"39.54.192.137"},
{"id":41,"first_name":"Kamila","last_name":"Smaleman","email":"ksmaleman14@admin.ch","gender":"Female","ip_address":"126.103.95.142"},
{"id":42,"first_name":"Gregor","last_name":"Brislan","email":"gbrislan15@wikimedia.org","gender":"Bigender","ip_address":"140.49.237.177"},
{"id":43,"first_name":"Krishnah","last_name":"Templeton","email":"ktempleton16@desdev.cn","gender":"Male","ip_address":"60.76.214.220"},
{"id":44,"first_name":"Devin","last_name":"Vertey","email":"dvertey17@zdnet.com","gender":"Female","ip_address":"72.201.174.166"},
{"id":45,"first_name":"Rudolfo","last_name":"Andrichuk","email":"randrichuk18@howstuffworks.com","gender":"Male","ip_address":"110.216.5.16"},
{"id":46,"first_name":"Lynea","last_name":"Paquet","email":"lpaquet19@woothemes.com","gender":"Female","ip_address":"69.136.165.194"},
{"id":47,"first_name":"Fayre","last_name":"Soal","email":"fsoal1a@slate.com","gender":"Female","ip_address":"250.51.118.250"},
{"id":48,"first_name":"Alberto","last_name":"Chastey","email":"achastey1b@biglobe.ne.jp","gender":"Male","ip_address":"184.213.62.203"},
{"id":49,"first_name":"Celisse","last_name":"Tripcony","email":"ctripcony1c@tinypic.com","gender":"Female","ip_address":"245.213.240.19"},
{"id":50,"first_name":"Bobby","last_name":"Jerrolt","email":"bjerrolt1d@dell.com","gender":"Male","ip_address":"203.151.46.97"}
];
function buscarUsuarioPorId() {
   const idBuscado = prompt("Ingresa el ID del usuario que deseas buscar:");
   const idNumerico = parseInt(idBuscado);
   let usuarioEncontrado = null;
   if (isNaN(idNumerico)) {
     alert("Por favor, ingresa un ID numérico válido.");
     return; 
   }
   for (let i = 0; i < usuarios.length; i++) {
     if (usuarios[i].id == idNumerico) {
       usuarioEncontrado = usuarios[i];
       break;
     }
   }
   if (usuarioEncontrado) {
     console.log("Usuario encontrado:", usuarioEncontrado);
   } else {
     alert("Usuario no encontrado.");
   }
 }
 function contarUsuariosPorGenero() {
   const conteoGeneros = {};
   for (let i = 0; i < usuarios.length; i++) {
     const generoActual = usuarios[i].gender;
     if (conteoGeneros[generoActual]) {
       conteoGeneros[generoActual]++;
     } else {
       conteoGeneros[generoActual] = 1;
     }
   }
   console.log("Conteo de usuarios por género:", conteoGeneros);
   return conteoGeneros;
 }
 buscarUsuarioPorId();
 contarUsuariosPorGenero();
