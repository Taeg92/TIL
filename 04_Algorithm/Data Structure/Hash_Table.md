# HashTable 구현



### Goal

- [x] 자료구조 중에서 Hash Table에대해 학습하고 직접 구현한다.
- [x] JavaScript 오브젝트 동작에 대해 학습하고 직접 구현하는 것이 목표다.
- [x] 문자열을 key와 value로 저장하도록 직접 Hash Table을 구현하고, 그 동작을 확인하기 위해 단위 테스트를 적용한다.



#### 학습효과

____

자료 구조나 객체를 비교하는 기준을 정리하는 것은 매우 중요하다. 

특히 객체 내부에 속성이 많은 경우에는, 모든 속성을 비교해서 객체의 동등성(equality)을 확인하는 것은 비용이 큰 작업이다. 

그래서 Hash 함수를 구현하고 해시값을 비교하는 방식을 많이 사용한다.





### 1. Hash Table 구현

> Javascript를 이용하여 Hash Table 구현

  



````js
// HashTable

function hashCode(s, tableSize) {
  let hash = 0;

  for (let i = 0; i < s.length; i++) {
    hash = s.charCodeAt(i) % tableSize;
  }

  return hash;
}
class HashTable {

  table = new Array(3);
  numItems = 0;
  
  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashCode(key, newTable.length); 
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  }

  put = (key, value) => {
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.8) {
      this.resize();
    }

    const idx = hashCode(key, this.table.length);
    if (this.contains(key)) {
      console.log('존재하는 key 입니다.');
    } else {
      this.numItems++;
      if (this.table[idx]) {
        this.table[idx].push([key, value]);
      } else {
          this.table[idx] = [[key, value]];
      }
    }
  }

  getValue = key => {  
    const idx = hashCode(key, this.table.length)
    
    if (!(this.contains(key))) {
        return null;
    }
    return this.table[idx].find(x => x[0] === key)[1];
  }

  contains = key => {
    let keyList = this.keys();
    let flag = true;
    if (keyList.filter(x => x === key).length){
      return true
    } else {
      return false
    }
  }

  replace = (key, value) => {
    if (this.contains(key)) {
      this.table.forEach(item => {
        item.forEach(bucket => {
          if (bucket[0] === key) {
            bucket[1] = value; 
          }
        })
      });
    } else {
      this.put(key, value);
    }
  }

  remove = key => {
    const idx = hashCode(key, this.table.length);

    if (!(this.contains(key))) {
      console.log('key값이 존재하지 않습니다.');
    } else {
      this.table.forEach(item => {
        item.forEach(bucket => {
          if (bucket[0] === key) {
            const idx = item.indexOf(bucket);
            item.splice(idx, 1);
            this.numItems -= 1;
          }
        })
      })
    }
    return this.table;
  }

  clear = () => {
    this.table = new Array(3);
    this.numItems = 0;
  }

  isEmpty = () => {
    if (this.numItems === 0) {
      return true
    } else {
      return false
    }
  }

  keys = () => {
    let keyList = [];
    this.table.forEach(item => {
      item.forEach(bucket => {
        keyList.push(bucket[0])
      })
    });
    return keyList;
  }

  size = () => this.numItems;
}
````



### 2. Unit Test

> 앞에서 구현한 Hash Table 동작을 테스트하기 위해, Unit Test 를 구현한다.

 

```js
class UnitTest {
  constructor() {
    this.myTable = new HashTable();
  }
  
  testClear = (expected) => {
    let result = false;
    this.myTable.clear();
    if (this.myTable.size() == 0) {
      result = true;
    } else {
      result = false;
    }
    assert.equal(result, expected);
    console.log('Test Clear() : Success');
  }

  testContains = (key, expected) => {
    let result = false;
    this.myTable.contains(key);
    if (this.myTable.contains(key)) {
      result = true;
    } else {
      result = false;
    }
    assert.equal(result, expected);
    console.log('Test Contains(key) : Success');
  }

  testGetValue = (key, expected) => {
    assert.equal(this.myTable.getValue(key), expected);
    console.log('Test getValue(key) : Success');
  }

  testIsEmpty = (expected) => {
    let result = false;
    if (this.myTable.size() == 0) {
      result = true;
    } else {
      result = false;
    }
    assert.equal(result, expected);
    console.log('Test isEmpty() : Success');
  }

  testKeys = (expected) => {
    assert.deepEqual(this.myTable.keys(), expected);
    console.log('Test keys() : Success');
  }

  testPut = (key, value, expected) => {
    this.myTable.put(key, value);
    let result = false;
    if (this.myTable.contains(key)) {
      result = true;
    } else {
      result = false;
    }
    assert.equal(result, expected);
    console.log('Test put(key, value) : Success');
  }

  testRemove = (key, expected) => {
    let result = false;
    this.myTable.remove(key);
    if (this.myTable.contains(key)) {
      result = false;
    } else {
      result = true;
    }
    assert.equal(result, expected);
    console.log('Test remove(key) : Success');
  }

  testReplace = (key, value, expected) => {
    this.myTable.replace(key, value);
    assert.equal(this.myTable.getValue(key), expected);
    console.log('Test replace(key, value) : Success');
  }

  testSize = (expected) => {
    assert.equal(this.myTable.size(), expected);
    console.log('Test size() : Success');
  } 
}
```



#### TEST

```js
const mytest = new UnitTest();

mytest.testPut('fruit', 'banana', true);
mytest.testPut('car', 'bmw', true);
mytest.testClear(true);
mytest.testSize(0, 0);
mytest.testPut('name', 'taegyung', true);
mytest.testGetValue('name', 'taegyung');
mytest.testRemove('name', true);
mytest.testSize(0, 0);
mytest.testIsEmpty(true);
mytest.testPut('animal', 'dog', true);
mytest.testReplace('animal', 'cat', 'cat');
mytest.testContains('animal', true);
mytest.testSize(1);
```

