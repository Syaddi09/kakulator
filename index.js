
//Kode ini mendefinisikan tiga variabel dengan kata kunci://
var currentInput = ''; //currentInput: Variabel ini digunakan untuk menyimpan input yang sedang dimasukkan oleh pengguna. Awalnya, variabel ini diinisialisasi dengan string kosong ('') karena pada awalnya tidak ada input yang dimasukkan oleh pengguna.//
var currentOperator = ''; //currentOperator: Variabel ini digunakan untuk menyimpan operator matematika (seperti +, -, *, /) yang digunakan dalam ekspresi yang sedang dihitung.//
var previousInput = ''; //previousInput: Variabel ini digunakan untuk menyimpan input sebelumnya yang sudah dimasukkan oleh pengguna sebelum pengguna memasukkan operator//


        //Fungsi appendNumber(number) digunakan untuk menambahkan angka ke dalam currentInput//
        function appendNumber(number) {  //Fungsi ini menerima satu argumen yaitu number//
                 currentInput += number; // fungsi (currentInput += number;), angka yang diterima sebagai argumen (number) ditambahkan ke dalam currentInput menggunakan operator += //
                updateDisplay(); //fungsi updateDisplay() dipanggil. Fungsi ini untuk memperbarui tampilan di layar kalkulator//
        }
         
       //Fungsi ini bernama appendOperator dan menerima satu argumen, yaitu operator. Argumen ini berisi operator matematika (seperti +, -, *, /)//
        function appendOperator(operator) { //Fungsi ini bernama appendOperator dan menerima satu argumen, yaitu operator//
            if (currentInput !== '') { // fungsi melakukan pemeriksaan kondisi dengan menggunakan if (currentInput !== ''). Ini memeriksa apakah currentInput tidak kosong. Jika kosong, maka tidak ada tindakan yang akan diambil. Jika currentInput tidak kosong maka kondisi ini akan dinilai sebagai false, dan blok pernyataan tersebut tidak akan dieksekusi.//
                if (previousInput !== '') { //Di dalam blok if, ada lagi satu pemeriksaan kondisi, yaitu if (previousInput !== ''). Ini memeriksa apakah previousInput tidak kosong. Jika previousInput tidak kosong, maka fungsi calculateResult() dipanggil//
                    calculateResult(); //calculateResult() dipanggil. Fungsi ini digunakan untuk menghitung hasil dari ekspresi sebelumnya dan memperbarui currentInput dengan hasil tersebut.//
                } 
                currentOperator = operator; //currentOperator diatur dengan nilai dari argumen operator yang diterima//
                previousInput = currentInput; //previousInput diatur ke nilai dari currentInput saat ini, karena input saat ini akan dianggap sebagai input sebelumnya untuk perhitungan berikutnya.//
                currentInput = ''; //currentInput diatur kembali ke string kosong ('') karena setelah operator dimasukkan, kita ingin mengumpulkan input baru untuk operasi selanjutnya.//
                updateDisplay(); //fungsi updateDisplay() dipanggil untuk memperbarui tampilan di layar kalkulator dengan input yang baru.//
            }
        }

        // Fungsi ini bernama clearDisplay mengatur ulang semua variabel yang terkait dengan kalkulator ke nilai awalnya.//
        function clearDisplay() { // // fungsi clearDisplay() ini digunakan untuk membersihkan dan mengatur ulang kalkulator ke kondisi awal//
            currentInput = ''; 
            currentOperator = '';
            previousInput = '';
            updateDisplay();
        }
        
        // Ini adalah deklarasi fungsi JavaScript dengan nama calculateResult. Fungsi ini digunakan untuk melakukan perhitungan atau operasi tertentu//
        function calculateResult() {

            //if (currentInput !== '' && previousInput !== ''). Ini memeriksa apakah currentInput (input saat ini) dan previousInput (input sebelumnya) tidak kosong. Pemeriksaan ini penting karena kita hanya ingin menghitung hasil ketika ada kedua input yang valid dan operator telah dimasukkan.//
            if (currentInput !== '' && previousInput !== '') { 
                //var result; adalah deklarasi variabel dalam JavaScript yang digunakan untuk membuat variabel bernama "result" tanpa memberikan nilai awal//
                let result; 
                // switch kata kunci dalam JavaScript yang digunakan untuk memulai konstruksi. //
                //currentOperator adalah variabel yang mungkin berisi operator atau nilai tertentu yang akan menentukan jalur eksekusi yang diambil dalam switch.//
                switch (currentOperator) { 

                   
                    // Di sini, kita mengeksekusi kode yang akan menjalankan operasi.//
                    //case '+':: Ini adalah label kasus (case) dalam pernyataan switch. Kasus ini akan dievaluasi ketika nilai dalam ekspresi switch sama dengan operator '+' (penambahan)//
                    // result Ini adalah pernyataan yang dilakukan ketika kasus '+' dievaluasi. Dalam kode ini, Anda melakukan operasi penambahan pada dua angka, yaitu nilai previousInput dan currentInput//
                    // //parseFloat() untuk mengubah input yang tersimpan dalam bentuk string menjadi angka floating-point, kemudian operasi matematika//
                    //variabel previousInput nilai yang sebelumnya dan variabel currentInput nilai yang akan ditambahkan//
                    case '+': 
                        result = parseFloat(previousInput) + parseFloat(currentInput);
                        break;
                    case '-':
                        result = parseFloat(previousInput) - parseFloat(currentInput);
                        break;
                    case '*':
                        result = parseFloat(previousInput) * parseFloat(currentInput);
                        break;
                    case '/':
                        result = parseFloat(previousInput) / parseFloat(currentInput);
                        break;
                    default:
                        break;
                }

                clearDisplay(); //clearDisplay() dipanggil untuk menghapus input saat ini,//
                currentInput = result.toString(); //variabel currentInput diatur dengan hasil perhitungan yang diubah menjadi string menggunakan result.toString()//
                updateDisplay(); //updateDisplay() dipanggil untuk menampilkan hasil perhitungan tersebut di layar//
            }
        }
        
       // Fungsi updateDisplay ini digunakan untuk melakukan pembaruan tampilan atau isi elemen dengan ID "display."//
       //value: Ini adalah properti dari elemen input HTML (seperti <input> atau <textarea>) yang digunakan untuk mengakses atau mengatur nilai yang dimasukkan atau ditampilkan oleh elemen tersebut. Dalam hal ini, elemen dengan ID "display" //
        function updateDisplay() {
            document.getElementById('display').value = currentInput;
        }

        