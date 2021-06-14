import React, { PureComponent } from 'react';
import { Row, Col, Card} from 'antd';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const style = {
    minHeight: '300px',
    border: `1px solid #f1f1f1`,
    marginLeft: '0'
};

const preStyle = {
    minHeight: '40px',
    border: `1px solid #f1f1f1`,
};

const cardStyle = { padding: `10px 0 `};

class RichEditor extends PureComponent {
    state = {
        editorState: EditorState.createEmpty(),
        editorContent: '',
    }

    onEditorStateChange = editorState => {
        this.setState({editorState});
    }

    onEditorContentChange = editorContent => {
        const { type, getRichEidtorHtmlText } = this.props && this.props.param;
        const { blocks } = editorContent;
        if(blocks && blocks.length > 0 && blocks[0].text){
            getRichEidtorHtmlText({
                type,
                html: draftToHtml(editorContent)
            });
        }
        this.setState({editorContent});
    }

    render(){
        const { editorState, editorContent } = this.state;
        let { showMoreFormat, placeholder } = this.props && this.props.param;
        return(
            <>
                <Row gutter={16} style={ style }>
                    <Col className="gutter-row" md={24}>
                        <Editor
                            style={{ padding: `0 5px`}}
                            editorState={ editorState }
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            placeholder={ placeholder ? placeholder : React.translate('prompt_editor_content') }
                            onEditorStateChange={ this.onEditorStateChange }
                            onContentStateChange={ this.onEditorContentChange }
                            localization={{ locale: 'zh', translations: { 'generic.add': React.translate('add_button') } }}
                        />
                    </Col>
                </Row>
                <div className="editor-format" style={{ display: showMoreFormat ? 'block' : 'none' }}> 
                    <Row justify="space-between">
                        <Col className="gutter-row" md={7}>
                            <Card title="同步转换HTML" bordered={false} bodyStyle={ cardStyle }>
                                <pre style={ preStyle }>{draftToHtml(editorContent)}</pre>
                            </Card>
                        </Col>
                        <Col className="gutter-row" md={7}>
                            <Card title="同步转换MarkDown" bordered={false} bodyStyle={ cardStyle }>
                                <pre style={{ ...preStyle, whiteSpace: 'pre-wrap' }}>{draftToMarkdown(editorContent)}</pre>
                            </Card>
                        </Col>
                        <Col className="gutter-row" md={7}>
                            <Card title="同步转换JSON" bordered={false} bodyStyle={ cardStyle }>
                                <pre style={{ ...preStyle, whiteSpace: 'normal' }}>{JSON.stringify(editorContent)}</pre>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default RichEditor;
