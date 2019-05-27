process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction){
        	case '/exit':
        		process.stdout.write('Quitting app!\n');
        		console.log(process.env.lang);
            	console.log(process.versions.node);
            	break;
            default:
            	process.stderr.write('Wrong instruction!\n');
            	console.log(process.env.lang);
            	console.log(process.versions.node);
        };
    }
        /*
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            //console.log(process.env.lang + '<br>' + process.versions.node); 
            //<br> nie działa jak w js :-)
            console.log(process.env.lang);
            console.log(process.versions.node);
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
            console.log(process.env.lang);
            console.log(process.versions.node);
        }
        */
    
});
