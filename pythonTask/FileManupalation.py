import os.path


def copy_file(source_path, dest_path):
    try:
        if not isinstance(source_path, str) or not isinstance(dest_path, str):
            raise TypeError("Path must be a string")
        if not os.path.exists(source_path):
            raise RuntimeError("Source File Does Not Exist")
        if os.path.exists(dest_path):
            raise RuntimeError("Destination File Already Exists")

        with open(source_path, "r") as source_file:
            content = source_file.read()
        with open(dest_path, "w") as destination_file:
            destination_file.write(content)
        print("Content Copied Successfully")
    except Exception as e:
        print("Error ->:", e)


copy_file(
    "test.txt",
    "test2.txt",
)
