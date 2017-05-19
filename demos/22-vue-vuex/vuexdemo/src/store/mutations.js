export default {
  addCount: function (state, n) {
    if (!isNaN(n)) {
      state.appleCount += n
    }
  },
  removeCount: function (state, n) {
    if (isNaN(n)) {
      return
    }
    state.appleCount -= n
  }
}

//echo "UUID=7854D26A-3F53-4E2A-A3F7-4E3F8122768D none ntfs rw,auto,nobrowse" | sudo tee -a /etc/fstab
