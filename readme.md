O Pomodoro Timer é uma ferramenta simples para gerenciar seu tempo de trabalho e descanso usando a técnica Pomodoro.

Como Usar
Acesse o link para abrir o aplicativo:https://replit.com/@damaris2003/desafiojera ou https://github.com/damaris2003/desafio_jera 

Configure o tempo do Pomodoro e do intervalo.
Clique no botão "Iniciar" para começar o timer do Pomodoro.

Quando o tempo do Pomodoro acabar, o contará automaticamente.

Quando o tempo de intervalo acabar, o timer do Pomodoro será contado também.

Para reiniciar o timer a qualquer momento, reinicie a página.


Requisitos

Navegador de internet (Chrome, Firefox, Safari, etc.)


Contribuição

Você pode contribuir com o projeto enviando pull requests para corrigir bugs, adicionar recursos ou melhorar a interface do usuário. Certifique-se de seguir as diretrizes de contribuição antes de enviar uma solicitação.


Autor

Este projeto foi criado por Dâmaris Marinho Domingues.


Explicando cada função:

startTimer():a função inicia o cronometro, atualizando o tempo restante na sessão a cada segundo.Ele recupera a os elementos DOM para exibição de tempo e botão iniciar,calcula o tempo restante com base na 'pomodoroTime' variável(baseada em minutos) e usa 'setInterval()' para atualizar o tempo restante a cada segundo.Quando o tempo restante chega a '0', a função interrompe o intervalo, incrementa a 'pomodoroCount' variável, atualizaa exibição da contagem do Pomodoro, reproduz um som de notificação.

startIntervalTimer():inicia o cronômetro de intervalo da mesma forma que o cronômetro Pomodoro, mas usa a intervalTimevariável em vez de 'pomodoroTime'.

playNotificationSound():cria um novo objeto Howl com a URL de um arquivo de som de notificação e o reproduz.

updatePomodoroTime():atualiza a pomodoroTimevariável e a exibição do cronômetro Pomodoro com o valor inserido em um campo de entrada.