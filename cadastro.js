const form = document.getElementById('registrationForm');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const successMessage = document.getElementById('successMessage');

        // Validação em tempo real da confirmação de senha
        confirmPassword.addEventListener('input', function() {
            if (password.value !== confirmPassword.value) {
                confirmPassword.classList.add('is-invalid');
                document.getElementById('confirmPasswordFeedback').style.display = 'block';
            } else {
                confirmPassword.classList.remove('is-invalid');
                document.getElementById('confirmPasswordFeedback').style.display = 'none';
            }
        });

        // Validação no submit
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Verifica validação do formulário
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            // Verifica se as senhas coincidem
            if (password.value !== confirmPassword.value) {
                confirmPassword.classList.add('is-invalid');
                document.getElementById('confirmPasswordFeedback').style.display = 'block';
                return;
            }

            // Simular envio bem-sucedido
            form.classList.remove('was-validated');
            successMessage.classList.remove('d-none');
            form.reset();

            // Esconder mensagem de sucesso após 5 segundos
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 5000);

            // Aqui você pode adicionar o código para enviar os dados para o servidor
        });