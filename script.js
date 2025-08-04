
        const PasswordBox=document.querySelector("#Password");
        const len=8;

        const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase="abcdefghijklmnopqrstuvwxyz";
        const number="0123456789";
        const symbol="@#$%^&*(){}:>.<,?+=-_";
        const mix=upperCase+lowerCase+number+symbol;

        function createPassword()
        {
            let password ="";
            password+=upperCase[Math.floor(Math.random() * upperCase.length)];
            password+=lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password+=number[Math.floor(Math.random() * number.length)];
            password+=symbol[Math.floor(Math.random() * symbol.length)];
           

            while(len> password.length)
        {
             password+=mix[Math.floor(Math.random() * mix.length)];
        }
        PasswordBox.value=password;
        }

       function copyPassword() 
       {
        PasswordBox.select();
        document.execCommand("copy");
       }
