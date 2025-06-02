### 📝 **Exercício – Verificação de Aprovação dos Alunos com um Array**

Crie uma uma lista de alunos, com seus nomes e suas notas finais. Faça um laço de repetição mostrando cada aluno e sua nota e imprima um resultado mostrando se o aluno foi aprovado ou reprovado.

1. Crie um **array único** que contenha tanto os **nomes dos alunos** quanto suas respectivas **notas finais**. Cada aluno deve ter seu nome seguido de sua nota, dentro de um **mesmo objeto** no array.

   Exemplo de estrutura do array:

   ```javascript
   let alunos = [
     { nome: "Maria", nota: 8.5 },
     { nome: "João", nota: 6.0 },
     { nome: "Ana", nota: 9.2 },
     { nome: "Carlos", nota: 5.8 },
     { nome: "Luana", nota: 7.3 }
   ];
   ```

2. Utilize um **laço de repetição (for)** para percorrer o **array de alunos**.

3. Dentro do laço, verifique se cada aluno foi **aprovado** ou **reprovado** com base na seguinte condição:

   * A média para aprovação é **7.0**. Se o aluno tiver uma nota maior ou igual a 7.0, ele será considerado **aprovado**.
   * Caso contrário, o aluno será **reprovado**.

4. Para cada aluno, exiba a seguinte mensagem no **console** (ou utilizando `alert`):

   * `"Nome do aluno foi aprovado com nota X"` ou
   * `"Nome do aluno foi reprovado com nota X"`

#### Exemplo de saída esperada:

```plaintext
Maria foi aprovada com nota 8.5
João foi reprovado com nota 6.0
Ana foi aprovada com nota 9.2
Carlos foi reprovado com nota 5.8
Luana foi aprovada com nota 7.3
```

### **Requisitos:**

* Use **apenas um array** que contém objetos com o nome e a nota de cada aluno.
* Utilize um **laço de repetição `for`** para percorrer o array e verificar a situação de cada aluno.
* Exiba as mensagens de aprovação ou reprovação no **console** ou em **alertas**.

### **Objetivo:**

Este exercício visa praticar o uso de **arrays de objetos**, **laços de repetição** e **estruturas condicionais** no JavaScript, além de ajudar a fixar a manipulação de dados mais complexos em arrays.

---

Se precisar de ajuda com a implementação ou um código exemplo, posso te ajudar também!
