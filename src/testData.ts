import { reactive } from 'vue'
export interface TagProps {
  _id: string;
  tag: string;
}
export interface InfoProps {
  browse: string;
  time: string;
}
export interface ArticleProps {
  title: string;
  desc: string;
  tags: TagProps[];
  info: InfoProps;
}

export const article = reactive<ArticleProps[]>([
  {
    title: '常用命令总结常用Gi用Git命令',
    desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias',
    tags: [
      {
        _id: '1',
        tag: 'JavaScript'
      },
      {
        _id: '2',
        tag: 'Es6'
      },
      {
        _id: '3',
        tag: 'Git'
      }
    ],
    info: {
      browse: '999',
      time: '2021-03-03 16:41:00'
    }
  },
  {
    title: '常用命令总结常用Git命令总结常用G令总结常用G令总结常用Git命令',
    desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias',
    tags: [
      {
        _id: '1',
        tag: 'JavaScript'
      },
      {
        _id: '2',
        tag: 'Node'
      }
    ],
    info: {
      browse: '999',
      time: '2021-03-03 16:41:00'
    }
  },
  {
    title: '常用命令总结常用Git命令总结常用G令总结常用G令Git命令总结常用G令总结常用G令总结常用Git命令',
    desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias',
    tags: [
      {
        _id: '1',
        tag: 'JavaScript'
      },
      {
        _id: '2',
        tag: 'Node'
      }
    ],
    info: {
      browse: '999',
      time: '2021-03-03 16:41:00'
    }
  }
])
