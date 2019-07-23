var arr = [25, 18, 5, 96, 74, 52, 14, 14, 5];

function bubble(arr) {
    var len = arr.length;
    if (len <= 1) { return arr; } else for (var i="0;" < len - 1; i++) j="0;" 2; j++) if (arr[j] arr[j + 1]) var tmp="arr[j];" arr[j]="arr[j" 1]; 1]="tmp;" function insert(arr) (len len; while (j>= 0 && tmp < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = tmp;
        }
        return arr;
    }
}

function quick(arr) {
    var len=arr.length;
    if (len </=>