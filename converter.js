module.exports = {

    convertToBinary: function(input) {
        let string = "";
        let number = input;

        while(number > 0) {
            let num = (number % 2);
            string = "" + num + string;
            number = Math.floor(number/2);
    }

        return string;
        },
    
      convertToHexa: function(input) {
        let string = "";
        let number = input;
            while(number > 0) {
                let num = (number % 16);
                string = "" + num + string;
                number = Math.floor(number / 16);
            }
            return string;
        }
    }
        


        