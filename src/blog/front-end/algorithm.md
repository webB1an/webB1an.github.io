# 数据结构与算法

## 排序

### 选择排序

**选择排序**：每次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。

```ts
function selectionSort(nums: number[]): void {
  const len = nums.length

  for (let i = 0; i < len - 1; i++) {
    let k = i
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[k]) {
        k = j
      }
    }

    [nums[i], nums[k]] = [nums[k], nums[i]]
  }
}
```

### 冒泡排序

**冒泡排序**：通过连续地比较与交换相邻元素实现排序。这个过程就像气泡从底部升到顶部一样，因此得名冒泡排序。

```ts
function bubbleSort(nums: number[]): void {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = num[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
}
```

上述的冒泡算法中，如果某轮冒泡没有执行任何操作的话，说明数组已经完成了排序，可以直接返回结果，因此，可以增加一个标志位 flag 来监测这种情况，一旦出现就立即返回。

优化后代码如下

```ts
function bubbleSort(nums: number[]): void {
  for (let i = nums.length - 1; i > 0; i--) {
    let flag = false
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        flag = true
        let temp = num[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
    if (!flag) break
  }
}
```

### 插入排序

**插入排序**：一种简单的排序算法，它的工作原理与手动整理一副牌的过程非常相似。具体来说，我们在未排序区间选择一个基准元素，将该元素与其左侧已排序区间的元素逐一比较大小，并将该元素插入到正确的位置。

可以这么理解：取未排序区间中的某个元素为基准数 base，将 base 与其左侧已排序区间元素依次对比大小，并"插入"到正确位置

```ts
function insertionSort(nums: number[]): void {
  for (let i = 1; i < nums.length - 1; i++) {
    const base = nums[i]
    let j = i - 1
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = base
  }
}
```

### 快速排序

**快速排序**：一种基于分治策略的排序算法，运行高效，应用广泛。

快速排序的核心操作是“哨兵划分”，其目标是：选择数组中的某个元素作为“基准数”，将所有小于基准数的元素移到其左侧，而大于基准数的元素移到其右侧。具体来说，哨兵划分的流程如下：

1. 选取数组最左端元素作为基准数，初始化两个指针 i 和 j 分别指向数组的两端。
2. 设置一个循环，在每轮中使用 i（j）分别寻找第一个比基准数大（小）的元素，然后交换这两个元素。
3. 循环执行步骤 2 ，直到 i 和 j 相遇时停止，最后将基准数交换至两个子数组的分界线。

```ts
function swap(nums: number[], i: number, j: number) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

// 哨兵划分
function partition(nums: number[], left: number, right: number): number {
  let i = left
    j = right

  while (i < j) {
    while(i < j && nums[j] >= nums[left]) {
      j-- // 从右向左找首个小于基准数的元素
    }

    while(i < j && nums[i] <= nums[left]) {
      i++ // 从左向右找首个大于基准数的元素
    } 

    swap(nums, i, j)
  }

  swap(nums, i, left)

  return i
}

function quickSort(nums: number[], left: number, right: number) {
  if (left >= right) {
    return
  }

  let pivot = partition(nums, left, right)

  quickSort(nums, left, pivot - 1)
  quickSort(nums, pivot + 1, right)
}
```

:::tip 提醒
刚发现哨兵划分这里，先 从右往左 还是 从左往右 寻找，结果是不一样的。显然，先 从右往左 是正确的

当我们以最左端元素为基准数时，必须先“从右往左”再”从左往右“。

哨兵划分 `partition()` 的最后一步是 `nums[left]` 与 `nums[i]` 交换，完成交换后基准数左边的元素都小于等于基准数，这也就要求 交换前 `nums[left] >= nums[i]` 必须要成立。

假设我们先“从左往右寻找第一个比基准数小的元素”，那么如果找不到，则会在 `i == j` 时跳出循环，此时 `nums[j] == nums[i] > nums[left]`；也就是说，这种情况下执行最后一步交换就会出问题了，会把一个比基准数更大的元素交换至数组最左端，导致哨兵划分失败。而如果我们先“从右往左”，就不会发生这个问题了。
:::

### 快速排序的尾递归优化

```ts
function swap(nums: number[], i: number, j: number) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

// 哨兵划分
function partition(nums: number[], left: number, right: number): number {
  let i = left
    j = right

  while (i < j) {
    while(i < j && nums[j] >= nums[left]) {
      j-- // 从右向左找首个小于基准数的元素
    }

    while(i < j && nums[i] <= nums[left]) {
      i++ // 从左向右找首个大于基准数的元素
    } 

    swap(nums, i, j)
  }

  swap(nums, i, left)

  return i
}

function quickSort(nums: number[], left: number, right: number) {
  // 子数组长度为 1 时终止
    while (left < right) {
      // 哨兵划分操作
      let pivot = this.partition(nums, left, right);
      // 对两个子数组中较短的那个执行快排
      if (pivot - left < right - pivot) {
        this.quickSort(nums, left, pivot - 1); // 递归排序左子数组
        left = pivot + 1; // 剩余未排序区间为 [pivot + 1, right]
      } else {
        this.quickSort(nums, pivot + 1, right); // 递归排序右子数组
        right = pivot - 1; // 剩余未排序区间为 [left, pivot - 1]
      }
    }
}
```


