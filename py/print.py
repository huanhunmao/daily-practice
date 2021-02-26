import win32print
import tempfile
import win32api
import os
import shutil
def print_file(filename):
    open(filename,"r")
    win32api.ShellExecute(
        0,
        "print",
        filename,
        '/d:"%s"' % win32print.GetDefaultPrinter(),
        ".",
        0
    )




#对象文件的类型指定
file_type_list = ['pdf','txt','xls','xlsx','pptx','doc']  
src_folder = r'C:\Users\13119\Desktop\py-test2'
#取得文件夹下面的所有指定类型的文件全名（路径+文件名）
# os.walk() 方法用于通过在目录树中游走输出在目录中的文件名，向上或者向下。
# for dirpath,dirnames,filenames in os.walk(folder):
#     print(dirnames)
def get_file_list(folder):
    filelist = []  #存储要copy的文件全名
    for dirpath,dirnames,filenames in os.walk(folder):
        for file in filenames:
            file_type = file.split('.')[-1]
            if(file_type in file_type_list):
                file_fullname = os.path.join(dirpath, file) #文件全名
                filelist.append(file_fullname)
    return filelist


#将文件list里面的文件拷贝到指定目录下
def copy_file(src_file_list, dst_folder):
    print('===========copy start===========')
    for file in src_file_list:
        shutil.copy(file, dst_folder)
    print('===========copy end!===========')

# filelist = get_file_list(src_folder)

if(__name__=="__main__"):
    #copy源所在目录
    src_folder = r'C:\Users\13119\Desktop\py-test'  #路径最后不要加\  
    #copy到的指定目录
    dst_folder = r'C:\Users\13119\Desktop\py-test2'   #路径最后不要加\ 
    
    #取得文件夹下所有指定类型的文件全名
    filelist = get_file_list(src_folder)
    copy_file(filelist, dst_folder)


path = r"C:\Users\13119\Desktop\py-test2"
for i in os.listdir(path):
    file_path = os.path.join(path,i)
    print("你要打印的文件是%s"%i)
    print_file(file_path)