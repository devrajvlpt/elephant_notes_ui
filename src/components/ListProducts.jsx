// import '../App.css'
import '../styles.css'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Dropcursor from '@tiptap/extension-dropcursor'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import Select from 'react-select'

import { EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'


const options = [
  { value: 1, label: 'H1' },
  { value: 2, label: 'H2' },
  { value: 3, label: 'H3' },
  { value: 4, label: 'H4' },
  { value: 5, label: 'H5' },
  { value: 6, label: 'H6' },
]


// define your extension array
const extensions = [
  Document, 
  Image,
  Dropcursor,
  Placeholder.configure({
    emptyEditorClass: 'is-editor-empty',
    placeholder: 'Type something to edit',
  }),  
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]


const MenuBar = (props) =>{
  const { editor } = useCurrentEditor()
  if (!editor) {
    return null
  }
  const headingLevel = (level) => {
    
    console.log(level)
    editor.chain().focus().toggleHeading({ level: level.value }).run()
  } 

  return (
    <>
      <div className="bg-black rounded-lg w-full h-10 flex flex-row items-start">
        <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={editor.isActive('bold') ? 'h-4 bg-black text-white' : 'h-4 bg-black text-white'}
            >
          B
        </button>
        <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'h-4 bg-black text-white' : 'h-4 bg-black text-white'}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'h-4 bg-black text-white' : 'h-4 bg-black text-white'}
      >
        S
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className={editor.isActive('undo') ?  'h-4 bg-black text-white' : 'h-4 bg-black text-white'}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        className={editor.isActive('undo') ?  'h-4 bg-black text-white' : 'h-4 bg-black text-white'}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'h-4 bg-black text-white' : 'h-4 bg-black text-white'}
      >
        purple
      </button>
      
      <Select styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'black' : 'black',
              color:"black"
            }), 
          }} 
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'primary50',
              primary: 'black',
            },
          })}
          className="bg-black text-black"
          options={options} 
          onChange={headingLevel}  
          placeholder="  " />
        
      </div>
      
      
      
   
     
    </>    
  )
}

const Tiptap = () => {

  const [lines, setLines] = useState([{
    "id":Math.random(),
    "text":""
  }]);

  const handleItemAdd = (index) => {
    console.log(index);
    const dLines = [...lines];
    dLines.splice(index + 1, 0, {
      "id":Math.random(),
      "text":""
    });
    setLines(dLines);
  }
  const handleContentUpdate = (id, updatedContent) => {
    const updatedContents = [...lines];
    updatedContents.find(item => item.id === id).text = updatedContent;
    setLines(updatedContents);
  };

    return (
      <>
      {
        lines.map((line, idx) => (
          <div class="flex items-center w-max gap-0.5" key={line.id}>
          <button class="flex group items-center justify-center border text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap bg-transparent border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-black/5 hover:text-neutral-700 active:bg-black/10 active:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-300 dark:active:text-neutral-200 h-8 gap-1 min-w-[2rem] px-2 w-auto"
            onClick={() => handleItemAdd(idx)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          </button>
            <button class="flex group items-center justify-center border text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap bg-transparent border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-black/5 hover:text-neutral-700 active:bg-black/10 active:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-300 dark:active:text-neutral-200 h-8 gap-1 min-w-[2rem] px-2 w-auto" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle>
              </svg>
              </button>
            <EditorProvider className="w-max" extensions={extensions} content={line.text} onUpdate={(updatedContent) => handleContentUpdate(line.id, updatedContent)}>
            <FloatingMenu className="block w-max bg-black rounded-md text-white">
              <MenuBar />
            </FloatingMenu>
            <BubbleMenu className="block w-max bg-black rounded-md text-white">
              <MenuBar />
            </BubbleMenu>
          </EditorProvider>
          </div>
        ))
      }
     
      
      </>
    )
  }
  
  export default Tiptap