# Brute Force

> Brute(무식한) + Force(힘) : 무식한 힘
>
> Brute Force는 완전탐색 알고리즘으로 가능한 모든 경우의 수를 모두 탐색하는 알고리즘이다.
>
> 예외 없이 **100% 확률로 정답만을 출력**한다는 장점이 있다.

​                 

- 특정한 구조를 전체적으로 탐색할 수 있는 방법을 필요로 한다.

- 알고리즘 설계의 가장 기본적인 접근 방법

- 선형 구조를 전체적으로 탐색하는 순차 탐색, 비선형 구조를 전체적으로 탐색하는 

  깊이 우선 탐색(DFS, Depth First Search)과 너비 우선 탐색(BFS, Breadth First Search)이 기본적인 도구이다.

​            

​                      

## I. 문제 해결 방법

​                       

1. 주어진 문제를 선형 구조로 구조화한다.
2. 구조화된 문제 공간을 적절한 방법으로 해를 구성할 때까지 탐색한다.
3. 구성된 해를 정리한다.

​               

​                  

## II. 예제 및 알고리즘

​                    

### 예제 1.

> 	##### 10의 약수를 구하기.

​                

#### 1. 10의 약수가 될 수 있는 모든 자연수를 구조화 한다.

10의 약수가 될 수 있는 모든 자연수를 구조화 하자.              

##### Code

```python
# 문제의 해가 될 수 있는 자료를 선형적으로 구성
factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
```

​                            

#### 2. 적절한 방법으로 해를 구성할 때까지 탐색한다.

##### Code

```python
def n_factors(n):
    
    # 10의 약수를 저장할 result list를 생성한다.
    result = list()
    factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    
    # 모든 인자에 대한 약수를 탐색한다.
    for num in factors:
        if n % num == 0 :
            result.append(num)
    return result        

print(n_factors(10))
```

##### 출력

```
[1, 2, 5, 10]
```

​                 

## III. 장단점



### 장점

- 신뢰도가 높다.

- 구현하기 까다롭지가 않다. 

  But 문제에 따라 어려운 경우도 존재함.

- 발전된 알고리즘과 응용의 출발점이다.



### 단점

- 시간대비 비효율 적이다.