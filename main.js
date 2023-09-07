 function generatePassword() {
      const charsetLower = "abcdefghijklmnopqrstuvwxyz";
      const charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const charsetDigits = "0123456789";
      const charsetSpecial = "!@#$%^&*";
      let selectedCharset = '';
      let password = '';

      const passwordLength = parseInt(document.getElementById("passwordLength").value);
      const useLower = document.getElementById("useLower").checked;
      const useUpper = document.getElementById("useUpper").checked;
      const useDigits = document.getElementById("useDigits").checked;
      const useSpecial = document.getElementById("useSpecial").checked;

      if (useLower) selectedCharset += charsetLower;
      if (useUpper) selectedCharset += charsetUpper;
      if (useDigits) selectedCharset += charsetDigits;
      if (useSpecial) selectedCharset += charsetSpecial;

      if (selectedCharset.length === 0) {
        alert("Please select at least one character set for the password.");
        return;
      }

      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharset.length);
        password += selectedCharset.charAt(randomIndex);
      }

      document.getElementById("generatedPassword").value = password;
    }
