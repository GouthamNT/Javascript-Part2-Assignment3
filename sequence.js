
function generateInput() {
    var num = document.querySelector('#selector').value;
    
    var i;
    var input = document.querySelector('#inputs');
    var body = document.querySelector('body');
    var existing_text = document.querySelector('#text');
    if(existing_text != null) {
        body.removeChild(input);
        body.removeChild(document.querySelector('#result'));
    }
    var div = document.createElement('div');
    div.setAttribute('id', 'inputs');
    body.appendChild(div);
    for(i = 0; i<num ; i++) {
        var input = document.querySelector('#inputs');
        var para = document.createElement('p');
        para.textContent = 'Number '+ (i+1) +' : ';
        var text = document.createElement('input');
    
        text.setAttribute('id', 'text');
        para.appendChild(text);
        input.appendChild(para);
    }
    div = document.createElement('div');
    div.setAttribute('id', 'result');
    var button = document.createElement('button');
    button.setAttribute('onclick','findMaxSequence()');
    button.textContent = "Find Max Sequence";
    div.appendChild(button);
    body.appendChild(div);
    
}

function findMaxSequence() {
    var numbers = document.querySelectorAll('#text');
    var len,
        i,
        max,
        max_index = 0,
        count = 0,
        final = [],
        j=0;
    var result = document.querySelector('#result'),
        para = document.querySelector('#maxsequence');
    max = 0;
    len = numbers.length;
    for(i = 0; i < len-1; i++) {
        var temp = parseInt(numbers[i].value);
        var temp1 = parseInt(numbers[i+1].value);
        if(isNaN(temp) || isNaN(temp1)) {
            var flag = 0;
            break;
        } else {
            if(temp < temp1) {
                count++;
                if(max < count) {
                    max = count;
                    max_index = i+1;
                    flag = 1;
                }
            } else {
                count = 0;
            }
        }
    }
    numbers = document.querySelectorAll('#text');
    if(max == 0) {
        para = document.createElement('p');
        para.setAttribute('id','maxsequence');
        para.textContent = "No Sequence";
        result.appendChild(para);
    } else {
        for(i = max_index-max;i <= max_index ; i++) {
            final[j] = numbers[i].value;
            j++;
        }
    }
    
    if(flag == 1) {
        if(para == null) {
            para = document.createElement('p');
            para.setAttribute('id','maxsequence');
            para.textContent = "Max sequence is "+ final;
            result.appendChild(para);
        }
        else {
            var newpara = document.createElement('p');
            newpara.setAttribute('id','maxsequence');
            newpara.textContent = "Max sequence is "+ final;
            result.replaceChild(newpara,para);
        }
    } else if(flag == 0) {
        if(para == null) {
            para = document.createElement('p');
            para.setAttribute('id','maxsequence');
            para.textContent = "Enter a Valid Number";
            result.appendChild(para);
        }
        else {
            var newpara = document.createElement('p');
            newpara.setAttribute('id','maxsequence');
            newpara.textContent = "Enter a Valid Number";
            result.replaceChild(newpara,para);
        }
    }
}