function affichePrimes() {
    num = document.getElementById('statut').value ;
    if (num == 1) {
                document.getElementById('primes').style.display='none';
    } else {
                document.getElementById('primes').style.display='block';
    }
    if(num==2 || num==3 || num==4 || num==6) {
        document.getElementById('primeISOE').style.display='block';
    } else {
        document.getElementById('primeISOE').style.display='none';
    }
    if(num==5) {
        document.getElementById('direction').style.display='block';
        document.getElementById('primeISAE').style.display='block';
    } else {
        document.getElementById('direction').style.display='none';
        document.getElementById('primeISAE').style.display='none';
    }
    return;
    
}