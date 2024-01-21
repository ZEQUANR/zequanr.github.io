---
title: 二叉树
icon: tabler:binary-tree
# cover: /assets/images/database/database-2.webp
author: 王泽权
date: 2023-08-21
category:
  - C
tag:
  - "C"
  - "数据结构"
sticky: true
star: true
copyright: 王泽权
---

二叉树是计算机科学中一种基本且广泛应用的数据结构，它以独特的分层结构和高效的查找性能，在解决各种问题时展现出强大的功能。在 C 语言中，通过使用指针可以方便地构建和操作二叉树结构。本文将详细介绍 C 语言中二叉树的基本概念、实现方法以及常见操作。

二叉树是一种每个节点最多有两个子节点的树形数据结构，这两个子节点分别称为左子节点和右子节点。二叉树既可以为空，也可以由一个根节点及两棵分别作为其左右子树的二叉树构成。根据节点间的关系和附加条件，二叉树有多种变体，如完全二叉树、满二叉树、平衡二叉树（如 AVL 树和红黑树）以及特殊的二叉搜索树等。

![](./image/binarytree.svg)

<center>图 1 ：二叉树</center><br>

## 数据结构

首先我们先来看一下二叉树的数据结构，从 code - 1 中我们可以看到它主要是由两部分组成，分别为指向左右两边的指针，与用于存储数据的数据域，其中从指针中我们不难发现每个节点最多有两个分支，且顺序不能随意颠倒。

```c
typedef struct node {
    struct node *left;
    struct node *right;
    int value;
} node_t, *node_ptr;
```

<center>code - 1 ：数据结构</center><br>

## 创建节点

```c
node_ptr create(int val) {
    node_ptr p_node = (node_ptr)malloc(sizeof(node_t));

    if (p_node != NULL) {
        p_node->left = NULL;
        p_node->right = NULL;
        p_node->value = val;
    }

    return p_node;
}
```

<center>code - 2 ：创建节点</center><br>

## 查询节点

```c
node_ptr find(node_ptr root, int val) {
    node_ptr current = root;

    while (current != NULL) {
        if (current->value == val) {
            goto finish;
        }

        if (current->value > val) {
            current = current->left;
        } else {
            current = current->right;
        }
    }

finish:
    return current;
}
```

<center>code - 3 ：查询节点</center><br>

## 遍历节点-递归方法

### 前序

```c
void pre_order(node_ptr root) {
    if (root == NULL) {
        return;
    }

    printf("%d ", root->value);

    if (root->left != NULL) {
        pre_order(root->left);
    }

    if (root->right != NULL) {
        pre_order(root->right);
    }
}
```

### 中序

```c
void in_order(node_ptr root) {
    if (root == NULL) {
        return;
    }

    if (root->left != NULL) {
        in_order(root->left);
    }

    printf("%d ", root->value);

    if (root->right != NULL) {
        in_order(root->right);
    }
}
```

### 后序

```c
void post_order(node_ptr root) {
    if (root == NULL) {
        return;
    }

    if (root->left != NULL) {
        post_order(root->left);
    }

    if (root->right != NULL) {
        post_order(root->right);
    }

    printf("%d ", root->value);
}
```

![](./image/recursion.svg)

## 遍历节点-非递归方法

### 前序

```c
#define SIZE (64)
node_ptr stack[SIZE] = { NULL };
int top = -1;

void pre_order_with_stack(node_ptr root) {
    while (root != NULL || top >= 0) {
        if (root != NULL) {
            top++;
            stack[top] = root;

            printf("%d ", root->val);

            root = root->left;
        } else {
            root = stack[top];
            top--;

            root = root->right;
        }
    }
}
```

![](./image/pre_order_with_stack.svg)

### 中序

```c
#define SIZE (64)
node_ptr stack[SIZE] = { NULL };
int top = -1;

void in_order_with_stack(node_ptr root) {
    while (root != NULL || top >= 0) {
        if (root != NULL) {
            top++;
            stack[top] = root;
            root = root->left;
        } else {
            root = stack[top];
            top--;

            printf("%d ", root->val);

            root = root->right;
        }
    }
}
```

![](./image/in_order_with_stack.svg)

### 后序

```c
#define SIZE (64)
node_ptr stack[SIZE] = { NULL };
int top = -1;

void post_order_with_stack(node_ptr root) {
    while (root != NULL || top >= 0) {
        if (root != NULL) {
            top++;
            stack[top] = root;

            root = root->left;
        } else {
            root = stack[top];
            top--;

            if (((long)root & 0x1) == 1) {
                root = (node_ptr)((long)root - 1);
                printf("%d ", root->val);
                root = NULL;
            } else {
                top++;
                stack[top] = (node_ptr)((long)root | 0x1);

                root = root->right;
            }
        }
    }
}
```

![](./image/post_order_with_stack.svg)
