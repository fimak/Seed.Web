import { ChangeEvent, useRef } from "react";

export type FileUploadData = {
    fileName: string,
    fileContents: string
}

export type FileUploadModel = {
    allowedExtensions?: string[],
    required?: boolean,
    multiple?: boolean,
    onChange: (data: FileUploadData[]) => void,
    onError?: (error: string) => void
}

export default function FileUpload({allowedExtensions, required, multiple, onChange, onError} : FileUploadModel) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        var result: FileUploadData[] = [];
        if (e.target.files) {
            var files = Array.from(e.target.files);
            var promises = files.map((file, index) => new Promise<FileUploadData>((resolve, reject) => {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    if (event.target) {
                        resolve({
                            fileName: file.name,
                            fileContents: event.target.result as string
                        });
                    }
                };
                reader.onerror = () => {
                    reject(file.name)
                };
            }));
            Promise.all(promises)
                .then(items => {
                    onChange(items);
                })
                .catch(errors => {
                    if (onError) {
                        onError(errors);
                    }
                });
        }
    };
    return (
        <input type="file" required={required} multiple={multiple} accept={allowedExtensions?.map(x => '.' + x).join(',')} onChange={handleChange}/>
    );
}