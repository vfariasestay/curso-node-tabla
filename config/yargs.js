const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    
                    /*demandOption:true*/ 
                }).option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default:false,
                    describe: 'Muestra la tabla en consola'
                    /*demandOption:true*/
                })
                .check((argv,options)=>{
                    //console.log('yargs',argv)
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

                
module.exports = argv;