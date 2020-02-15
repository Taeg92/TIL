# Graph I

Graph Crash Course

​           

### 핵심내용

- Graph
- Graph 구현
- Graph 탐색 (DFS & BFS)
- Graph 관련 문제

​     

## I. Graph

> 정점(Node)과 간선(Edge)으로 표현된 자료구조

### (1) Graph

- **`정점(Node)` == `꼭지점(Vertex)`**
  - **위치**를 의미한다.
- **`간선(Edge)`** == **`아크(Arc)`**
  - **위치 간의 관계를 표시한 선**을 의미한다.
- `**인접 정점(Adjacent Vertex)**`
  - 간선으로 직접 연결된 정점(노드)

​       

### (1) Graph의 종류

#### 1. 무방향 그래프(Undirected Graph)

**방향이 없는 그래프**

- 노드는 간선을 통해 양방향으로 갈 수 있다.
- 일반적으로 노드 A, B가 연결되어 있는 경우 (A, B) 혹은 (B, A)로 표기한다.
- **정점의 차수(Degree)**
  - 무방향 그래프에서 **하나의 정점에 인접한 정점의 개수**
  - A의 차수는 2(B, C)

![image-20200214134755129](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214134755129.png)

#### 2. 방향 그래프(Directed Graph)

**간선에 방향이 있는 그래프**

- 일반적으로 노드 A, B가 A→B로 가는 간선이 연결되어 있을 때, <A, B>로 표기한다.
  - <B, A>는 B→A로 가는 간선이므로 <A, B>와 다르다.
- **진입차수(In-Degree)**
  - 방향 그래프에서 **외부에서 오는 간선**의 수
  - D의 진입차수는 2(B→D, C→D), C의 진입차수는 1(A→C)
- **진출차수(Out-Degree)**
  - 방향 그래프에서 **외부로 향하는 간선**의 수
  - D의 진출차수는 0, C의 진출차수는 1(C→D)

![image-20200214134826995](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214134826995.png)

####  3. 가중치 그래프(Weighted Graph) 또는 네트워크(Network)

**간선에 비용 또는 가중치가 할당된 그래프**

- 두 노드 간의 **최소 비용 경로(최단 경로)**를 찾는 문제가 유명하다.
  - 예를 들어 노드를 도시라고 생각하고, 간선을 도시를 연결하는 도로라고 가정하자. 간선에 매겨진 가중치는 이동하는데 걸리는 비용(시간, 통행료, 기름값 등)이라고 모델링할 수 있다.
  - 서울에서 광주로 이동하는데 걸리는 비용
    - 서울 → 구미 → 광주 : 9
    - 서울 → 대전 → 광주 : 3 (⇒ 최소비용)

![image-20200214134848573](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214134848573.png)

#### 4. 연결 그래프(Connected Graph)와 비연결 그래프(Disconnected Graph)

- **연결 그래프**
  - 무방향 그래프에 있는 **모든 노드의 경로가 존재**하는 경우

![image-20200214135759795](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214135759795.png)

- **비연결 그래프**
  - 무방향 그래프에서 **특정 노드의 경로가 존재하지 않**는 경우

![image-20200214135823818](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214135823818.png)


### 3.5 완전 그래프

그래프의 **모든 노드가 서로 연결**되어 있는 그래프

![image-20200214135844921](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214135844921.png)





## II. Graph 구현 & 표현

### (1) 인접행렬(Adjacency Matrix)

2차배열을 통해 노드들의 연결상태를 표현

#### 1. Undirected Graph

#### 2. Directed Graph

![image-20200214140042732](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214140042732.png)



![image-20200214135951722](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214135951722.png)



### (2) 인접리스트(Adjacency List)

#### 1. 2차배열 활용

![image-20200214140450351](C:\Users\multicampus\Desktop\학습내용\2020.02.14\지각자의최후\image-20200214140450351.png)

#### 2. dictionary 활용



#### 3. 카운트배열 활용







### (4) Graph 표현 별 공간(Space) 복잡도 및 시간(Time) 복잡도

#### 1. 공간복잡도

- 인접 행렬: `O(V**2)` (정점의 개수)

- 인접 리스트: `O(E)` (간선의 개수)

- 대부분의 경우 `E < V**2`

#### 2. 시간복잡도

- 인접행렬
  - 두 정점 간의 연결 여부(간선의 유무)를 확인하는데 유리(`O(1)`)
    - `G[a][b]`
  - 정점 A와 연결된 모든 간선
    - `O(|V|)`
- 인접리스트
  - 두 정점 간의 연결 여부(간선의 유무)를 확인하는데 유리(`O(1)`)
    - `G[a][b]`
  - 정점 A와 연결된 모든 간선 (가장 빈번하게 출제되는 문제)
    - `O(A의 차수)`
- 비고 : 완전그래프의 경우 



## VI. Graph 탐색 (DFS & BFS)

![dfsbfs](https://practice.geeksforgeeks.org/ckeditor/images/uploads/1533114033_binary_tree_search.png)

> 그래프 탐색의 목적 : 특정 정점을 시작으로 하여 모든 정점을 한 번씩 조회

### (1) DFS(Depth First Search): 깊이 우선 탐색

### (2) BFS(Breadth First Search): 너비 우선 탐색





## V. Graph 관련 문제

### 기초

- [BOJ ABCDE](https://www.acmicpc.net/problem/13023)
- [BOJ DFS와 BFS](https://www.acmicpc.net/problem/1260)
- [BOJ 연결 요소의 개수](https://www.acmicpc.net/problem/11724)
- [BOJ 이분 그래프]()

### 응용

- [그래프 경로](https://swexpertacademy.com/main/learn/course/subjectDetail.do?courseId=AVuPDN86AAXw5UW6&subjectId=AWOVHzyqqe8DFAWg#)