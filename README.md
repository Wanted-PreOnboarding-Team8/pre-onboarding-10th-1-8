# Todo App

> **원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 Best Pratice들로 Todo App 재구성**

## 목차

- [1. 사전 선발 과제](#🔗-사전-선발-과제)
- [2. 팀 규칙](#✏️-팀-규칙)
  - [커밋 컨벤션](#1️⃣-커밋-컨벤션)
  - [타입스크립트 컨벤션](#2️⃣-타입스크립트-컨벤션)
- [3. 기술 스택](#🛠️-기술-스택)
- [4. 서비스 소개](#📖-서비스-소개)
  - [서비스 도메인](#0️⃣-서비스-도메인)
  - [기능 구현](#1️⃣-기능-구현)
  - [페이지별 화면](#2️⃣-페이지별-화면)
- [5. Best Practice](#👑-Best-Practice)
- [6. 실행 방법](#⚙️-실행-방법)

## 🔗 사전 선발 과제

| 이름   | GitHub Repository                                                                 |
| ------ | --------------------------------------------------------------------------------- |
| 김대연 | [@shaqok](https://github.com/shaqok/wanted-pre-onboarding-frontend)               |
| 김용희 | [@kyhui1115](https://github.com/kyhui1115/wanted-pre-onboarding-frontend)         |
| 박상민 | [@pparksang1013](https://github.com/pparksang1013/wanted-pre-onboarding-frontend) |
| 윤예나 | [@Yena-Yun](https://github.com/Yena-Yun/wanted-pre-onboarding-frontend)           |
| 이상돈 | [@powercording](https://github.com/powercording/wanted-pre-onboarding-frontend)   |
| 임예지 | [@1myeji](https://github.com/1myeji/wanted-pre-onboarding-frontend)               |
| 장은영 | [@jjangeunyeong](https://github.com/jjangeunyeong/wanted-pre-onboarding-frontend) |
| 조승현 | [@tmdgus95](https://github.com/tmdgus95/wanted-pre-onboarding-frontend)           |
| 진호병 | [@bicco2](https://github.com/bicco2/wanted-pre-onboarding-frontend)               |

## ✏️ 팀 규칙

### 1️⃣ 커밋 컨벤션

```
- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Env : 개발 환경 관련 설정
- Style : 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)
- Refactor : 코드 리팩토링 (더 효율적인 코드로 변경 등)
- Design : CSS 등 디자인 추가/수정iE
- Comment : 주석 추가/수정
- Docs : 내부 문서 추가/수정
- Test : 테스트 추가/수정
- Chore : 빌드 관련 코드 수정
- Rename : 파일 및 폴더명 수정
- Remove : 파일 삭제
```

예시) Feat: 로그인 기능 수정

### 2️⃣ 타입스크립트 컨벤션

- 인터페이스명 마지막에 Type 붙이기 ( 예: ExampleType )

### 3️⃣ 폴더구조
- 컴포넌트의 스타일과 로직은 관련있는 한 폴더 내에서 별도의 파일로 관리.

## 🛠️ 기술 스택

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg)
![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg)
![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)
![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)

## 📖 서비스 소개

### 0️⃣ 서비스 도메인

[서비스 페이지로 이동](pre-onboarding-10th-1-8.vercel.app)

### 1️⃣ 기능 구현

- 회원 가입
- 로그인 기능
- Todo : 추가, 수정, 삭제 기능

### 2️⃣ 페이지별 화면

|                                                                                                                  |                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![main](https://user-images.githubusercontent.com/123078739/234795207-58f492cc-e367-407d-9875-d56e7a9f0e36.png)  | ![register](https://user-images.githubusercontent.com/123078739/234795207-58f492cc-e367-407d-9875-d56e7a9f0e36.png) |
| 메인 페이지                                                                                                      | 회원가입 페이지                                                                                                     |
| ![login](https://user-images.githubusercontent.com/123078739/234795207-58f492cc-e367-407d-9875-d56e7a9f0e36.png) | ![Todo](https://user-images.githubusercontent.com/123078739/234795207-58f492cc-e367-407d-9875-d56e7a9f0e36.png)     |
| 로그인 페이지                                                                                                    | Todo 페이지                                                                                                         |

## 👑 트러블 

> **Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.**

### 📌 Todo 컴포넌트 Best Practice 선정

❓best practice인 이유

- 코드의 응집도와 유지 보수성이 올리기 위해 setter를 한 군데서 관리하기로 하였습니다.   
- 하위 컴포넌트에 setter를 직접 내려보내는 기존 방식에서, 상위 레벨인 Todo Page에 setter를 포함한 함수를 두고 해당 함수를 하위 컴포넌트(AddTodo, TodoList)로 내려보내도록 수정했습니다.

🔍 코드 배치

- Todo Page에 Todo 데이터를 조작하고 setter에 넣는 함수를 배치하였습니다.   
- AddTodo에서 input을 통해 입력된 데이터를 위에서 props로 받은 함수에 매개변수로 전달했습니다.   
- TodoList에서는 조작된 데이터를 렌더링하는 역할만 담당하도록 했습니다.   

### 📌 api 콜 로직을 커스텀 훅으로 관리하기 vs. api 콜 함수들을 따로 관리하기

❓best practice인 이유

- Todo api 콜 함수들(CRUD) 을 분리해서 관리했을 때 각 코드의 책임(기능)이 명확히 분리되어 코드의 가독성이 좋았다고 느꼇습니다. 반면에 코드가 다소 반복되는 느낌을 주었습니다.

```javascript
export const getTodos = async () => {
  try {
    const res = await authInstance.get('/todos');
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTodo = async createTodoRequest => {
  // ...
};

export const deleteTodo = async id => {
  // ...
};

export const updateTodo = async (id, updateTodoRequest) => {
  // ...
};
```

- 커스텀 훅으로 관리했을 때 반복되는 코드를 하나의 함수로 합칠 수 있었지만 함수하나가 CRUD 를 전부 담당하게 되어 책임이 무거워 지는 느낌을 주었습니다.

```javascript
 const mutate = async (args: Mutate) => {
    const request = generateRequest(args);

    try {
      const result = await TodoApi(request);
      const { status } = result;

      if (status === STATUS.OK || status === STATUS.CREATED || status === STATUS.NO_CONTENT) {
        setApiResponse({ response: result, ...args });
      }
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        setError(axiosError);
      }
    }
  };
// ...
// return mutate
```

- 결과적으로 함수 호출 부분에서 커스텀 훅으로 쓰고 읽기 편하고, 여러 api를 관리하는 훅으로서 유지보수하기 편해졌다고 판단한 custom 훅으로써 best practice 로 정하였습니다.   

```javascript
await mutate({ method: 'PUT', id, body: todo });
await mutate({ method: 'DELETE', id });
```

📌 Button 뷰 컴포넌트 모듈화
- TodoItem에서 제출/취소 버튼과 수정/삭제 버튼의 뷰 로직이 중복되는 코드를 발견하였습니다.   
- 공통 Button 컴포넌트를 만들어 적용하여 결과적으로 반복되는 코드를 줄일 수 있었습니다.

❓ 기존 TodoItem 코드
```javascript
 {isEdit ? (
        <div>
          <button type="button" data-testid="submit-button" onClick={handleSubmit}>
            제출
          </button>
          <button type="button" data-testid="cancel-button" onClick={handleCancel}>
            취소
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            data-testid="modify-button"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정
          </button>
          <button type="button" data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
```

❓ components/atom에 모듈화된 Button 컴포넌트   
```javascript
interface ButtonProps {
  dataId: string;
  buttonText: string;
  onClickFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ dataId, buttonText, onClickFn }: ButtonProps) {
  return (
    <ElButton data-testid={dataId} onClick={onClickFn}>
      {buttonText}
    </ElButton>
  );
}

export default Button;
```javascript
❓ 수정된 TodoItem 버튼   
```
<div>
  <Button
      dataId={isEdit ? 'submit-button' : 'modify-button'}
      buttonText={isEdit ? '제출' : '수정'}
      onClickFn={isEdit ? handleEdit : toggleEdit}
   />
  <Button
      dataId={isEdit ? 'cancel-button' : 'delete-button'}
      buttonText={isEdit ? '취소' : '삭제'}
      onClickFn={isEdit ? handleEditCancel : handleDelete}
   />
</div>
```


## ⚙️ 실행 방법

```
npm install
npm start
```
