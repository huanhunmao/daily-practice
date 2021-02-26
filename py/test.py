path = r"C:\Users\13119\Desktop\打印"
for i in os.listdir(path):
    file_path = os.path.join(path,i)
    print("你要打印的文件是%s"%i)
    print_file(file_path)